import projectList from "./data.js";
// Latest-projects on home page
const latestProjects = document.querySelector('#latest-projects');

// Generate multiple numbers without repeat
let uniqueValues = new Set();

do {
    uniqueValues.add(Number(Math.floor(Math.random() * 11)));
} while ( uniqueValues.size < 3 );

const arrNumbers = Array.from(uniqueValues);

// Render these random indexes
for (let i = 0; i < 3; i++) {
    const a = document.createElement('a');
    const article = document.createElement('article');
    article.classList.add('article');
    article.classList.add('ta-end');
    const h = document.createElement('h3');
    const p = document.createElement('p');

    latestProjects.append(a);
    a.append(article);
    article.append(h);
    article.append(p);

    let index = arrNumbers.sort(function(a, b){return a - b})[i];

    a.href = projectList[index].link;
    a.setAttribute('target', '_blank');
    article.style.backgroundImage = projectList[index].image;
    h.textContent = projectList[index].name;
    p.textContent = `${projectList[index].year} | ${projectList[index].type} | ${projectList[index].category}`;
};

// Render button at the end of the container
const a = document.createElement('a');
const button = document.createElement('button');
a.classList.add('ta-end');
button.classList.add('button');

latestProjects.append(a);
a.append(button);
button.classList.add('button-primary');

a.href = "./projects.html";
button.textContent = "more";

const skillCards = document.querySelectorAll('.card-bg');
skillCards.forEach((card) => {
    card.addEventListener('contextmenu', event => event.preventDefault());
});