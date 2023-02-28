let bar = document.querySelector(".bar");
let navbar = document.querySelector(".navbar");
let navClose = document.querySelector(".nav-close");

bar.addEventListener("click", () => {
    navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
    navbar.classList.remove("showNav");
});
