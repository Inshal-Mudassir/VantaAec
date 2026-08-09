"use strict";


/* =================================
   MOBILE NAVIGATION
================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


/* =================================
   CLOSE MOBILE MENU
================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


/* =================================
   ACTIVE NAVIGATION
================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.id;

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation,
    { passive: true }
);


/* =================================
   HEADER SHADOW
================================= */

const header =
    document.querySelector(".header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(20,30,35,.06)";

    } else {

        header.style.boxShadow = "none";

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    { passive: true }
);


/* =================================
   SMOOTH ANCHOR SCROLL
================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


/* =================================
   FORM
================================= */

const inquiryForm =
    document.getElementById("inquiryForm");

const formMessage =
    document.getElementById("formMessage");


if (inquiryForm) {

    inquiryForm.addEventListener(
        "submit",
        function () {

            if (formMessage) {

                formMessage.textContent =
                    "Sending your inquiry...";

                formMessage.style.color =
                    "#b4874a";

            }

        }
    );

}


/* =================================
   ESTIMATION VALUE ANIMATION
================================= */

const stats =
    document.querySelectorAll(".stat strong");

let statsAnimated = false;

function animateStats() {

    if (statsAnimated) return;

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return;

    const rect =
        statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {

        statsAnimated = true;

        stats.forEach((stat) => {

            const finalValue =
                stat.textContent.trim();

            const number =
                parseInt(
                    finalValue.replace(/\D/g, ""),
                    10
                );

            if (!number) return;

            const suffix =
                finalValue.replace(
                    /[0-9]/g,
                    ""
                );

            let current = 0;

            const duration = 1200;

            const start =
                performance.now();

            function update(time) {

                const progress =
                    Math.min(
                        (time - start) /
                        duration,
                        1
                    );

                current =
                    Math.floor(
                        number * progress
                    );

                stat.textContent =
                    current + suffix;

                if (progress < 1) {

                    requestAnimationFrame(update);

                } else {

                    stat.textContent =
                        finalValue;

                }

            }

            requestAnimationFrame(update);

        });

    }

}

window.addEventListener(
    "scroll",
    animateStats,
    { passive: true }
);

animateStats();


/* =================================
   IMAGE ERROR FALLBACK
================================= */

const backgroundImages = [
    ".hero-image",
    ".feature-image",
    ".project-one",
    ".project-two",
    ".project-three"
];

backgroundImages.forEach((selector) => {

    const element =
        document.querySelector(selector);

    if (!element) return;

    const background =
        getComputedStyle(element)
            .backgroundImage;

    if (
        !background ||
        background === "none"
    ) {
        element.style.backgroundColor =
            "#dcd8cf";
    }

});


/* =================================
   INITIALIZE
================================= */

updateActiveNavigation();
updateHeader();