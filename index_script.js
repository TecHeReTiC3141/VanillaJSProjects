let projects = [
    'color flipper',
    'simple counter',
    'reviews', 'navbar',
    'sidebar', 'modal',
    'questions', 'menu',
    'video', 'scroll',
    'tabs', 'countdown timer',
    'lorem ipsum', 'grocery bud',
    'slider'
];

function createElementWithClassAndValue(tag, value, ...classes) {
    let el = document.createElement(tag);
    el.innerHTML = value;
    classes.forEach(cl => {
        el.classList.add(cl);
    });
    return el;
}

document.addEventListener('DOMContentLoaded', () => {
    let projects_sect = document.querySelector('.projects');
    function createProject(proj) {
        let project = createElementWithClassAndValue('a', '', 'project');
        project.href = `./${proj}/template.html`;
        project.target = '_blank';
        let name = createElementWithClassAndValue('h3', proj, 'name');
        let image = createElementWithClassAndValue('img', '', 'preview');
        image.src = `./proj_images/${proj}.jpg`;
        image.alt = proj;
        project.append(image, name);
        projects_sect.appendChild(project);
    }
    projects.forEach(proj => {
        createProject(proj);
    });

});
