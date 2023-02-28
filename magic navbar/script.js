document.addEventListener('DOMContentLoaded', () => {
    let nav_elements = document.querySelectorAll('.nav li');
    let activeBg = document.querySelector('.sect-bg');
    let nav = document.querySelector('.nav');
    let content = document.querySelector('.content');
    nav_elements.forEach(el => {
        el.addEventListener('click', e => {
            nav_elements.forEach(el => {
                el.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            let targ_rect = e.currentTarget.querySelector('i').getBoundingClientRect();
            let targ_center_x = (targ_rect.left + targ_rect.right) / 2;
            activeBg.style.left = `${(targ_center_x - (activeBg.clientWidth + 
                (content.classList.contains('dark') ? 16 : 0)) / 2 - nav.getBoundingClientRect().left)}px`;
        });
    });

    function set_indicator() {
        for (let nav_el of nav_elements) {
            if (nav_el.classList.contains('active')) {
                let targ_rect = nav_el.querySelector('i').getBoundingClientRect();
                let targ_center_x = (targ_rect.left + targ_rect.right) / 2;
                activeBg.style.left = `${targ_center_x - (activeBg.clientWidth +
                    (content.classList.contains('dark') ? 16 : 0)) / 2 - nav.getBoundingClientRect().left}px`;
                break;
            }
        }
    }
    set_indicator();

    window.addEventListener('resize', set_indicator);


    let themeToggler = document.querySelector('.theme-toggler');
    let [lightBtn, darkBtn] = themeToggler.querySelectorAll('i');
    themeToggler.addEventListener('click', () => {
        content.classList.toggle('light');
        content.classList.toggle('dark');

        lightBtn.classList.toggle('fa-solid');
        lightBtn.classList.toggle('fa-regular');
        darkBtn.classList.toggle('fa-solid');
        darkBtn.classList.toggle('fa-regular');
        set_indicator();
    });
});