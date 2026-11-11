
export function initSkillFilter() {

    const skillContainers = document.querySelectorAll(".skill-grid-container");

    skillContainers.forEach(container => {
        const buttons = container.querySelectorAll(".skill-menu button");
        const skills = container.querySelectorAll(".skill-pill");
        const skillList = container.querySelector(".skill-list");
        const skillGrid = container.querySelector(".skill-grid");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        const skillPills = container.querySelectorAll(".skill-pill");

        skillPills.forEach(pill => {
            const color = pill.dataset.color;

            if (!color) {
                return;
            }

            const defaultBorderColor = pill.style.borderColor;
            const defaultBoxShadow = pill.style.boxShadow;

            pill.addEventListener("pointerenter", () => {
                pill.style.borderColor = color;
                pill.style.boxShadow = `0 3px 12px ${color}`;
            });

            pill.addEventListener("pointerleave", () => {
                pill.style.borderColor = defaultBorderColor;
                pill.style.boxShadow = defaultBoxShadow;
            });
        });

        if (!skillList) {
            return;
        }

        let heightAnimationFrame = 0;

        const getVerticalPadding = () => {
            const styles = getComputedStyle(skillList);
            return parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
        };

        const getContentHeight = () =>
            skillList.getBoundingClientRect().height - getVerticalPadding();

        const applyFilter = category => {
            skills.forEach(skill => {
                const categories = (skill.dataset.category ?? "")
                    .split(" ")
                    .filter(Boolean);

                skill.classList.remove("is-filtering");
                skill.hidden =
                    category !== "all" &&
                    !categories.includes(category);
            });
        };

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                cancelAnimationFrame(heightAnimationFrame);
                const currentHeight = getContentHeight();

                skillList.style.transition = "none";
                skillList.style.height = `${Math.max(0, currentHeight)}px`;
                skillList.offsetHeight;
                buttons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
                applyFilter(button.dataset.category ?? "all");

                const nextHeight = skillGrid
                    ? skillGrid.getBoundingClientRect().height
                    : skillList.scrollHeight - getVerticalPadding();
                if (reduceMotion.matches || Math.abs(currentHeight - nextHeight) < 0.5) {
                    skillList.classList.remove("is-collapsing");
                    skillList.style.height = "auto";
                    skills.forEach(skill => {
                        if (!skill.hidden) {
                            skill.classList.add("is-filtering");
                        }
                    });
                    return;
                }

                skillList.classList.toggle("is-collapsing", nextHeight < currentHeight);
                skills.forEach(skill => {
                    if (!skill.hidden) {
                        skill.classList.add("is-filtering");
                    }
                });

                const duration = nextHeight < currentHeight ? 1400 : 700;
                const startTime = performance.now();
                const animateHeight = timestamp => {
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const easedProgress = 1 - (1 - progress) ** 4;
                    const height = currentHeight + (nextHeight - currentHeight) * easedProgress;

                    skillList.style.height = `${height}px`;
                    if (progress < 1) {
                        heightAnimationFrame = requestAnimationFrame(animateHeight);
                    } else {
                        skillList.style.height = `${nextHeight}px`;
                        skillList.classList.remove("is-collapsing");
                    }
                };

                heightAnimationFrame = requestAnimationFrame(animateHeight);
            });
        });

        skillList.addEventListener("animationend", event => {
            if (event.animationName === "skill-pill-enter") {
                event.target.classList.remove("is-filtering");
            }
        });
    });
}
