document.addEventListener('DOMContentLoaded', function() {
    // Handle clicking anywhere on the page
    document.addEventListener('click', function(e) {
        if (e.target.tagName.toLowerCase() !== 'button' && 
            e.target.tagName.toLowerCase() !== 'a') {
            showLockedTerminalModal();
        }
    });

    // Modal handling
    const modal = document.getElementById('terminal-locked');
    const closeButton = document.getElementById('close-modal');

    function showLockedTerminalModal() {
        modal.style.display = 'block';
    }

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add blinking cursor to the last line of each section
    function addCursorToLastLine() {
        document.querySelectorAll('.content-section').forEach(section => {
            const lastElement = section.lastElementChild;
            if (!lastElement.querySelector('.cursor-line')) {
                lastElement.innerHTML += '<span class="cursor-line">█</span>';
            }
        });
    }

    addCursorToLastLine();

    // Optional: Animation for section entrance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.content-section').forEach((section) => {
        observer.observe(section);
    });
});

// Additional animations and functionality can be added here






// Function to handle scroll-based header resizing
/*
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
/*
// Toggle mobile nav menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
*/