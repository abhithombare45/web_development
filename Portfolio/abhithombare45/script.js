// Will add interactivity (navbar toggle, animations) later
console.log("Portfolio loaded successfully!");

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
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





