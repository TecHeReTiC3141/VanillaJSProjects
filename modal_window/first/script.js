document.addEventListener('DOMContentLoaded', () => {
    let modal_window = document.querySelector('.modal');
    let open_btn = document.querySelector('button.open');
    let close_btn = document.querySelector('button.close');

    let bg = document.querySelector('.background');
    open_btn.addEventListener('click', () => {
        modal_window.classList.add('active');
        bg.style.opacity = ".7";
    });

    close_btn.addEventListener('click', () => {
        modal_window.classList.remove('active');
        bg.style.opacity = "0";
    });
});