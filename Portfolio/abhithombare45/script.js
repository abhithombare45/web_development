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





