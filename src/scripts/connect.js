
export function initCopyButton() {

    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach(button => {
        button.addEventListener("click", async () => {
            const container = button.closest(".link-and-copy-container");
            const link = container?.querySelector(".link")?.textContent?.trim();

            if (!link) {
                return;
            }

            try {
                await navigator.clipboard.writeText(link);

                button.classList.add("is-copied");
                button.setAttribute("aria-label", "Copied");

                window.setTimeout(() => {
                    button.classList.remove("is-copied");
                    button.setAttribute("aria-label", "Copy");
                }, 3000);
            } catch (error) {
                console.error("Could not copy text:", error);
            }
        });
    });
}

