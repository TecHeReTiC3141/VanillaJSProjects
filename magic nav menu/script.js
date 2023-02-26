document.addEventListener('DOMContentLoaded', () => {
    let nav_elements = document.querySelectorAll('.nav li');
    let activeBg = document.querySelector('.sect-bg');
    let nav = document.querySelector('.nav');
    nav_elements.forEach(el => {
        el.addEventListener('click', e => {
            nav_elements.forEach(el => {
                el.classList.remove('active');
            });
            e.currentTarget.classList.add('active');
            let targ_rect = e.currentTarget.querySelector('i').getBoundingClientRect();
            let targ_center_x = (targ_rect.left + targ_rect.right) / 2;
            activeBg.style.left = `${(targ_center_x - (activeBg.clientWidth + 16) / 2 - nav.getBoundingClientRect().left)}px`;
        });
    });

    window.addEventListener('resize', () => {
        console.log('resized');
        for (let nav_el of nav_elements) {
            if (nav_el.classList.contains('active')) {
                let targ_rect = nav_el.querySelector('i').getBoundingClientRect();
                let targ_center_x = (targ_rect.left + targ_rect.right) / 2;
                activeBg.style.left = `${(targ_center_x - (activeBg.clientWidth + 16) / 2 - nav.getBoundingClientRect().left)}px`;
                break;
            }
        }
    });
});