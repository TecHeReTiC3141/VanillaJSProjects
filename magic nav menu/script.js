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
            console.log(targ_center_x,  activeBg.clientWidth,  targ_rect.width);
            activeBg.style.left = `${(targ_center_x - activeBg.clientWidth / 2 - nav.getBoundingClientRect().left)}px`;
        });
    })
});