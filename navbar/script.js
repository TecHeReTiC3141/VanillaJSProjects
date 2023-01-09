document.addEventListener('DOMContentLoaded', () => {
    let toggle_btn = document.querySelector('.nav-toggle');
    let show_links = false;

    let sects = document.querySelector('.sects');

    toggle_btn.addEventListener('click', () => {
        show_links = !show_links;
        sects.classList.toggle('show');
    });
});