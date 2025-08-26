// Will add interactivity (navbar toggle, animations) later
console.log("Portfolio loaded successfully!");

function showMenu() {
    const menuArea = document.querySelector(".menu-area");
    menuArea.style.display = "flex";
}

function hideMenu() {
    const menuArea = document.querySelector(".menu-area");
    menuArea.style.display = "none";
}

function toggleMenu() {
    const menu = document.querySelector(".menu-area");
    const icon = document.querySelector(".menu-icon");

    // Toggle active class
    menu.classList.toggle("active");

    // Change icon between ☰ and ✖

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.5)";
        header.style.backdropFilter = "blur(6px)";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
    }
});





