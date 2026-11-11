
export function initNavigation() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".menu-backdrop");
    const menuLinks = navigation?.querySelectorAll("a");

    const setMenuOpen = (isOpen) => {
        menuToggle?.setAttribute("aria-expanded", String(isOpen));
        menuToggle?.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        navigation?.classList.toggle("is-open", isOpen);
        sidebar?.classList.toggle("is-open", isOpen);
    };

    menuToggle?.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    backdrop?.addEventListener("click", () => setMenuOpen(false));
    menuLinks?.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    const sections = document.querySelectorAll("main section");
    const links = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                links.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            });
        },
        {
            threshold: 0.3,
        }
    );

    sections.forEach((section) => {
        section.classList.add("section-reveal");
        observer.observe(section);
    });
}