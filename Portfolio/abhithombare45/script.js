// Will add interactivity (navbar toggle, animations) later
console.log("Portfolio loaded successfully!");



function toggleMenu() {
    const menu = document.querySelector(".menu-area");
    // const icon = document.querySelector(".menu-icon");

    // Toggle active class
    menu.classList.toggle("active");

    // Change icon between ☰ and ✖

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        icon.classList.add("fa-solid");  // ensure correct style
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        icon.classList.add("fa-solid");  // ensure correct style
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

// ✅ New NLP, LLM, TS Projects toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".project-section");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            // Close all open rows
            document.querySelectorAll("[class^='project-row-']").forEach(row => {
                row.classList.remove("active");
            });
            document.querySelectorAll(".project-section").forEach(sec => {
                sec.classList.remove("active");
            });

            // Open the clicked one
            section.classList.add("active");
            const sectionClass = section.classList.contains("ml-section") ? ".project-row-ML" :
                section.classList.contains("nlp-section") ? ".project-row-NLP" :
                    section.classList.contains("llm-section") ? ".project-row-LLM" :
                        section.classList.contains("ts-section") ? ".project-row-TS" : null;
            if (sectionClass) {
                document.querySelectorAll(sectionClass).forEach(row => row.classList.add("active"));
            }
        });
    });
});



// for icon animation in skills page
// Skill card hover animations
// Animate only the robot icon on hover
const robotIcon = document.querySelector(".fa-robot");

if (robotIcon) {
    robotIcon.addEventListener("mouseenter", () => {
        robotIcon.classList.add("fa-bounce");
    });

    robotIcon.addEventListener("mouseleave", () => {
        robotIcon.classList.remove("fa-bounce");
    });
}

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





