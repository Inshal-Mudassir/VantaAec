/* =========================================================
   VANTA AEC
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 700);

});



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");


    const icon =
        menuBtn.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

const navigationItems =
    document.querySelectorAll(".nav-links a");


navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("open");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(function (element) {

        revealObserver.observe(element);

    });



/* =========================================================
   PDF SAMPLE FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const sampleCards =
    document.querySelectorAll(".sample-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active state */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Activate selected button */

        button.classList.add("active");


        const selectedCategory =
            button.getAttribute("data-filter");


        sampleCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                selectedCategory === category
            ) {

                card.style.display =
                    "block";

                setTimeout(function () {

                    card.style.opacity =
                        "1";

                    card.style.transform =
                        "translateY(0)";

                }, 20);

            } else {

                card.style.opacity =
                    "0";

                card.style.transform =
                    "translateY(15px)";


                setTimeout(function () {

                    card.style.display =
                        "none";

                }, 250);

            }

        });

    });

});



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            contactForm.querySelector(
                'input[type="text"]'
            ).value;


        if (name.trim() === "") {

            alert(
                "Please enter your name."
            );

            return;

        }


        alert(
            "Thank you! Your project inquiry has been received."
        );


        contactForm.reset();

    }
);



/* =========================================================
   IMAGE LOAD EFFECT
========================================================= */

const images =
    document.querySelectorAll("img");


images.forEach(function (image) {

    if (image.complete) {

        image.classList.add("loaded");

    } else {

        image.addEventListener(
            "load",
            function () {

                image.classList.add("loaded");

            }
        );

    }

});



/* =========================================================
   PARALLAX HERO EFFECT
========================================================= */

const heroImage =
    document.querySelector(".hero-image img");


window.addEventListener("scroll", function () {

    if (!heroImage) {
        return;
    }


    const scrollPosition =
        window.scrollY;


    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `scale(1.03) translateY(${scrollPosition * 0.08}px)`;

    }

});



/* =========================================================
   PROJECT IMAGE HOVER
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.classList.add("hovered");

    });


    card.addEventListener("mouseleave", function () {

        card.classList.remove("hovered");

    });

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {

        item.classList.remove("active");


        const target =
            item.getAttribute("href");


        if (
            target === "#" + currentSection
        ) {

            item.classList.add("active");

        }

    });

});