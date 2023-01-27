document.addEventListener('DOMContentLoaded', () => {
    let toggle_btn = document.querySelector('.toggle-btn');
    let video = document.querySelector('.bg-video');

    toggle_btn.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('play')) {
            e.currentTarget.classList.remove('play');
            video.pause();
        } else {
            e.currentTarget.classList.add('play');
            video.play();
        }
    });
});

window.addEventListener('load', () => {
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('hidden');

    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
});