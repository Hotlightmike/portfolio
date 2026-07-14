const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const revealItems = document.querySelectorAll(".reveal");

function closeMenu() {
    navigation.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
});

navigationLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 30);
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

revealItems.forEach(function (item) {
    observer.observe(item);
});

document.querySelector("#year").textContent = new Date().getFullYear();
