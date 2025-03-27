document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function setActiveNavLink() {
        let currentSection = null;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + window.innerHeight;
            const isLastSection = index === sections.length - 1;

            if (
                (window.scrollY >= sectionTop - sectionHeight / 3 &&
                    window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) ||
                (isLastSection && scrollPosition >= document.body.scrollHeight)
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (currentSection && link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    setActiveNavLink();
    window.addEventListener("scroll", setActiveNavLink);
});
