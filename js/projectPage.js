import projectList from "./data.js";

const projectPage = document.querySelector('#projects');

const all = document.querySelector('#filter-all');
const design = document.querySelector('#filter-design');
const development = document.querySelector('#filter-development');
const art = document.querySelector('#filter-art');

// Filtering
let projects = projectList;

all.addEventListener('click', function(){
    checkFilter(all, 'All');
});

design.addEventListener('click', function(){
    checkFilter(design, 'Design');
});

development.addEventListener('click', function(){
    checkFilter(development, 'Development');
});

art.addEventListener('click', function(){
    checkFilter(art, 'Art');
});

function checkFilter(buttonName, categoryName) {
    all.classList.remove('active');
    art.classList.remove('active');
    design.classList.remove('active');
    development.classList.remove('active');

    buttonName.classList.add('active');
    if (categoryName == 'All') {
        return genProjects(projectList);
    }
    if (categoryName !== 'All'){
        const filteredItemsArray = projectList.filter( item => {
            return (item.category.includes(categoryName));
        });
        projects = filteredItemsArray;
        return genProjects(projects);
    }
};

// Generate html of each card from database
function genProjects(projects) {
    const html = projects.map((projectList) => {
        return `
                <a href="${projectList.link}" target="_blank">
                    <article class="article ta-end" style="background-image:${projectList.image}">
                        <h3>${projectList.name}</h3>
                        <p>${projectList.year} | ${projectList.type} | ${projectList.category}</p>
                    </article>
                </a>
                `;
    }).join('');
    projectPage.innerHTML = html;
};

genProjects(projects);