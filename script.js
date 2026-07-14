document.querySelector("#about").addEventListener("click", function () {
    document.querySelector("#text").textContent =
        "Меня зовут Mykhailo. Я изучаю веб-разработку.";
});

document.querySelector("#projects").addEventListener("click", function () {
    document.querySelector("#projects-section").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelector("#contact").addEventListener("click", function () {
    document.querySelector("#text").textContent =
        "Email: hotlightmike@gmail.com";
});
