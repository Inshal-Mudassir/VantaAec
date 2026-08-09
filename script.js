/* ===============================
   VANTA AEC
================================ */


/* MOBILE MENU */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("mobile-open");

    });

}


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("mobile-open");

    });

});


/* HEADER SHADOW */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(16,32,43,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 160;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* CONTACT FORM */

const inquiryForm =
    document.getElementById("inquiryForm");

const formMessage =
    document.getElementById("formMessage");


if (inquiryForm) {

    inquiryForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name")
                .value.trim();

            const email =
                document.getElementById("email")
                .value.trim();

            const phone =
                document.getElementById("phone")
                .value.trim();

            const service =
                document.getElementById("service")
                .value.trim();

            const message =
                document.getElementById("message")
                .value.trim();


            if (!name || !email || !message) {

                formMessage.textContent =
                    "Please complete the required fields.";

                formMessage.style.color =
                    "#b44d4d";

                return;

            }


            /*
                CHANGE THIS TO YOUR REAL
                COMPANY EMAIL.
            */

            const companyEmail =
                "company@email.com";


            const subject =
                encodeURIComponent(
                    "New VANTA AEC Project Inquiry"
                );


            const body =
                encodeURIComponent(
`
NEW PROJECT INQUIRY

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Service:
${service || "Not selected"}

Project Details:
${message}
`
                );


            window.location.href =
                `mailto:${companyEmail}?subject=${subject}&body=${body}`;


            formMessage.textContent =
                "Opening your email application...";

            formMessage.style.color =
                "#4f8c60";


            inquiryForm.reset();

        }
    );

}


/* FOOTER YEAR */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* SCROLL REVEAL */

const revealItems =
    document.querySelectorAll(
        ".service-card, .sample-card, .stat, .person-card, .ceo-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .08
        }
    );


revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(20px)";

    item.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(item);

});