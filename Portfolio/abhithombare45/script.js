// Will add interactivity (navbar toggle, animations) later
console.log("Portfolio loaded successfully!");



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


// ✅ New ML Projects toggle logic
document.querySelector(".ml-section").addEventListener("click", () => {
    const section = document.querySelector(".ml-section");

    // Toggle the active class on the heading
    section.classList.toggle("active");

    // Show/Hide its project rows
    let next = section.nextElementSibling;
    while (next && next.classList.contains("project-row-ML")) {
        next.classList.toggle("active", section.classList.contains("active"));
        next = next.nextElementSibling;
    }
});



window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.1)";
        header.style.backdropFilter = "blur(6px)";
    } else {
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
    }
});





