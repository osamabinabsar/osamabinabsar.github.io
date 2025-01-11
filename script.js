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

    // Terminal minimize functionality
    const minimizeBtn = document.querySelector('.terminal-button.minimize');
    const terminalContainer = document.querySelector('.terminal-container');
    const screensaver = document.querySelector('.screensaver');

    minimizeBtn.addEventListener('click', () => {
        terminalContainer.classList.add('minimize-animation');
        setTimeout(() => {
            terminalContainer.style.display = 'none';
            screensaver.style.display = 'block';
            startScreensaver();
        }, 500);
    });

    function startScreensaver() {
        const texts = [
            "Passionate about cybersecurity since my teenage years...",
            "Specialized in purple team operations...",
            "Expert in SIEM implementation and monitoring...",
            "Conducted numerous penetration tests...",
            // Add more personal achievements and experiences
        ];

        setInterval(() => {
            const text = texts[Math.floor(Math.random() * texts.length)];
            const elem = document.createElement('div');
            elem.classList.add('floating-text');
            elem.style.left = `${Math.random() * 80}vw`;
            elem.textContent = text;
            screensaver.appendChild(elem);

            setTimeout(() => elem.remove(), 20000);
        }, 3000);
    }

    // Project card flip
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// Additional animations and functionality can be added here

let isTerminalOpen = true;

function minimizeTerminal() {
    const terminal = document.querySelector('.terminal');
    terminal.style.height = '30px';
    terminal.style.overflow = 'hidden';
}

function maximizeTerminal() {
    const terminal = document.querySelector('.terminal');
    terminal.style.height = '80vh';
    terminal.style.width = '90vw';
    terminal.style.overflow = 'auto';
}

function closeTerminal() {
    const terminal = document.querySelector('.terminal-container');
    const commandInput = document.querySelector('#commandInput');
    terminal.style.display = 'none';
    commandInput.style.display = 'block';
    isTerminalOpen = false;
}

// Add event listener for document to catch terminal command
document.addEventListener('keypress', function(e) {
    if (!isTerminalOpen && e.key === 'Enter') {
        const input = document.querySelector('#commandInput');
        if (input.value.trim().toLowerCase() === 'terminal') {
            const terminal = document.querySelector('.terminal-container');
            terminal.style.display = 'block';
            input.style.display = 'none';
            input.value = '';
            isTerminalOpen = true;
        }
    }
});

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