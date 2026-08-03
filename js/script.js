
/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.querySelector(".loader");

        loader.classList.add("hide");

        document.body.classList.remove("loading");

    }, 1700);

});



/* =====================================================
   FULLSCREEN MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const fullscreenMenu =
    document.getElementById("fullscreenMenu");


menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");

    fullscreenMenu.classList.toggle("open");

});


document
    .querySelectorAll(".fullscreen-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            fullscreenMenu.classList.remove("open");

        });

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

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


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   NUMBER COUNTERS
===================================================== */

const numberElements =
    document.querySelectorAll("[data-number]");

let numbersAnimated = false;


function animateNumbers() {

    if (numbersAnimated)
        return;

    numbersAnimated = true;


    numberElements.forEach(element => {

        const target =
            Number(element.dataset.number);

        const duration = 1600;

        const startTime =
            performance.now();


        function update(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) /
                    duration,
                    1
                );


            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );


            element.textContent =
                Math.floor(
                    target * eased
                );


            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                element.textContent =
                    target;

            }

        }


        requestAnimationFrame(update);

    });

}


const numbersSection =
    document.querySelector(".numbers");


const numberObserver =
    new IntersectionObserver(

        entries => {

            if (entries[0].isIntersecting) {

                animateNumbers();

                numberObserver.disconnect();

            }

        },

        {
            threshold: .3
        }

    );


if (numbersSection) {

    numberObserver.observe(
        numbersSection
    );

}



/* =====================================================
   SERVICE ANIMATION
===================================================== */

const services =
    document.querySelectorAll(".service");


const serviceObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;


                const index =
                    [...services]
                    .indexOf(entry.target);


                entry.target.style.transitionDelay =
                    `${index * 70}ms`;


                entry.target.style.opacity =
                    "1";


                entry.target.style.transform =
                    "translateY(0)";


                serviceObserver.unobserve(
                    entry.target
                );

            });

        },

        {
            threshold: .05
        }

    );


services.forEach(service => {

    service.style.opacity = "0";

    service.style.transform =
        "translateY(40px)";


    service.style.transition =
        `
        opacity .8s cubic-bezier(.2,.8,.2,1),
        transform .8s cubic-bezier(.2,.8,.2,1),
        background .5s,
        padding .5s
        `;


    serviceObserver.observe(service);

});



/* =====================================================
   HERO PARALLAX
===================================================== */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (!heroImage)
        return;


    if (
        window.scrollY <
        window.innerHeight
    ) {

        heroImage.style.transform =
            `translateY(${window.scrollY * .12}px) scale(1)`;

    }

});



/* =====================================================
   MAGNETIC BUTTON
===================================================== */

const roundButton =
    document.querySelector(".round-button");


if (roundButton) {

    roundButton.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900)
                return;


            const rect =
                roundButton.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            roundButton.style.transform =
                `
                translate(
                    ${x * .18}px,
                    ${y * .18}px
                )
                rotate(8deg)
                `;

        }
    );


    roundButton.addEventListener(
        "mouseleave",
        () => {

            roundButton.style.transform = "";

        }
    );

}



/* =====================================================
   PROJECT IMAGE PARALLAX
===================================================== */

const projects =
    document.querySelectorAll(".project");


projects.forEach(project => {

    project.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900)
                return;


            const image =
                project.querySelector(
                    ".project-image"
                );


            if (!image)
                return;


            const rect =
                project.getBoundingClientRect();


            const x =
                (event.clientX -
                    rect.left) /
                rect.width -
                .5;


            const y =
                (event.clientY -
                    rect.top) /
                rect.height -
                .5;


            image.style.transform =
                `
                scale(1.06)
                translate(
                    ${x * -12}px,
                    ${y * -12}px
                )
                `;

        }
    );


    project.addEventListener(
        "mouseleave",
        () => {

            const image =
                project.querySelector(
                    ".project-image"
                );


            if (image)
                image.style.transform = "";

        }
    );

});



/* =====================================================
   SAMPLE LIBRARY FILTER
===================================================== */

const sampleFilters =
    document.querySelectorAll(
        ".sample-filter"
    );


const sampleCards =
    document.querySelectorAll(
        ".sample-card"
    );


sampleFilters.forEach(filter => {

    filter.addEventListener(
        "click",
        () => {

            sampleFilters.forEach(
                button => {

                    button.classList
                        .remove("active");

                }
            );


            filter.classList.add("active");


            const category =
                filter.dataset.filter;


            sampleCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;


                if (
                    category === "all" ||
                    cardCategory === category
                ) {

                    card.style.display =
                        "flex";


                    setTimeout(() => {

                        card.style.opacity =
                            "1";

                        card.style.transform =
                            "translateY(0)";

                    }, 30);

                } else {

                    card.style.opacity =
                        "0";

                    card.style.transform =
                        "translateY(20px)";


                    setTimeout(() => {

                        card.style.display =
                            "none";

                    }, 300);

                }

            });

        }
    );

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    ".submit-button"
                );


            button.innerHTML =
                `
                INQUIRY SENT

                <i class="ri-check-line"></i>
                `;


            button.style.background =
                "#D8FF38";


            button.style.color =
                "#10110F";


            setTimeout(() => {

                contactForm.reset();


                button.innerHTML =
                    `
                    SEND INQUIRY

                    <i class="ri-arrow-up-right-line"></i>
                    `;


                button.style.background = "";

                button.style.color = "";

            }, 3000);

        }
    );

}



/* =====================================================
   SMOOTH ANCHOR NAVIGATION
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetId =
                    anchor.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                )
                    return;


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target)
                    return;


                event.preventDefault();


                const offset =
                    target.offsetTop;


                window.scrollTo({

                    top: offset,

                    behavior: "smooth"

                });

            }
        );

    });