const menuBtn = document.getElementById("menu-btn__unique");
const navLinks = document.getElementById("nav-links__unique");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");


    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-menu-3-line" : "ri-close-line"

    );
});

const navLinksList = document.querySelectorAll(".nav-link");
navLinksList.forEach((link) => {
    link.addEventListener("click", () => {
        navLinksList.forEach((item) => item.classList.remove("active"));
        link.classList.add("active");
    });
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container__content__unique h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content__unique h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".container__content__unique p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".socials__unique", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".team__unique", {
    ...scrollRevealOption,
    delay: 1500,
});
