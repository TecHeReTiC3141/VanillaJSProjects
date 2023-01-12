document.addEventListener('DOMContentLoaded', () => {
    let toggle_btn = document.querySelector('.nav-toggle');
    let close_btn = document.querySelector('.close');

    let nav = document.querySelector('aside');

    toggle_btn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    close_btn.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});