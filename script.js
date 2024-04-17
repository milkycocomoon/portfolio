// Navigation

const navButton = document.querySelector('.nav-mobile-only');
const nav = document.querySelector('.nav');

navButton.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('nav-open');
}

// --------------------------------------------------------------------------------------- Navigation

// Footer

const year = new Date();
const footer = document.querySelector('#footer');
footer.textContent = `©2023-${year.getFullYear()} Milkycocomoon, All rights reserved`;

// --------------------------------------------------------------------------------------- Footer