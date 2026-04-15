document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    const downloadBtn = document.querySelector(".btn-download");
    const cvCard = document.querySelector(".cv-card");
    const socialLinks = document.querySelectorAll(".social-icons a");

    // Page load animation
    if (cvCard) {
        cvCard.style.opacity = "0";
        cvCard.style.transform = "translateY(30px)";
        setTimeout(() => {
            cvCard.style.transition = "all 0.8s ease";
            cvCard.style.opacity = "1";
            cvCard.style.transform = "translateY(0)";
        }, 200);
    }

    // Active nav link on click
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Highlight nav on scroll
    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Resume download / print
    if (downloadBtn) {
        downloadBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // Safe external links
    socialLinks.forEach(link => {
        link.setAttribute("rel", "noopener noreferrer");
    });
});