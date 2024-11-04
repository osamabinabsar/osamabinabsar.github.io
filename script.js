// Function to handle scroll-based header resizing

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const headerContent = document.querySelector(".header-content");
    const navLinks = document.querySelector("#nav-links");

    if (window.scrollY > 50) {
        // Shrink the header and adjust positions
        header.style.padding = "0.5em 2em";
        headerContent.style.alignItems = "flex-start";
        headerContent.querySelector("h1").style.fontSize = "1.5em";
        headerContent.querySelector("p").style.fontSize = "0.8em";
        navLinks.style.justifyContent = "flex-end";
    } else {
        // Reset to original size
        header.style.padding = "1em 2em";
        headerContent.style.alignItems = "flex-start";
        headerContent.querySelector("h1").style.fontSize = "2em";
        headerContent.querySelector("p").style.fontSize = "1em";
    }
});

/*
// Scroll event to toggle header class
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        // Add minimized class when scrolled down
        header.classList.add("minimized");
    } else {
        // Remove minimized class when at the top
        header.classList.remove("minimized");
    }
});
*/

// Toggle mobile nav menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
