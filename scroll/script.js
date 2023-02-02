document.addEventListener('DOMContentLoaded', () => {

    function setup_links() {
        let anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach(item => {
            item.addEventListener('click', e => {
               e.preventDefault();

               let hrefId = e.currentTarget.getAttribute('href').substring(1);

               let target = document.getElementById(hrefId);

               let header = document.querySelector('.header');
               header.querySelector('.navbar').classList.remove('opened');
               header.querySelector('.navbar').style.height = '0';
               let targetOffset = target.getBoundingClientRect().top;

               let offsetDiff = targetOffset - header.offsetHeight;
               window.scrollBy({
                   top: offsetDiff,
                   behavior: "smooth",
               })
            });
        });
    }

    function set_year() {
        let date = document.querySelector('.year');
        date.innerHTML = new Date().getFullYear().toString();
    }

    function set_toggle() {
        let toggleBtn = document.querySelector('.nav-toggle');
        let navbar = document.querySelector('.navbar');
        let links = document.querySelector('.links');

        toggleBtn.addEventListener('click', () => {
            console.log()
            if (navbar.classList.contains('opened')) {
                navbar.style.height = `${0}`;
            } else {
                navbar.style.height = `${links.getBoundingClientRect().height}px`;
            }
            navbar.classList.toggle('opened');
        });
    }

    function toggle_fixed_header() {
        let header = document.querySelector('.header');
        let toHeader = document.querySelector('.to-header');
        toHeader.addEventListener('click', (e) => {
            if (toHeader.classList.contains('hidden')) return;
            e.preventDefault();

            window.scrollBy({
                top: -window.pageYOffset,
                behavior: 'smooth',
            });
        });

        let hero = document.getElementById('hero');

        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset, header.getBoundingClientRect().height,
                hero.getBoundingClientRect().height);
           if (window.pageYOffset > header.getBoundingClientRect().height) {
               header.classList.add('fixed');
           } else {
               header.classList.remove('fixed');
           }
           if (window.pageYOffset > hero.getBoundingClientRect().height - header.getBoundingClientRect().height) {
               toHeader.classList.remove('hidden');
           } else {
               toHeader.classList.add('hidden');
           }
        });
    }

    setup_links();
    set_year();
    set_toggle();
    toggle_fixed_header();

});