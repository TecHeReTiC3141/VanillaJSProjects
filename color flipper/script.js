document.addEventListener('DOMContentLoaded', () => {
    let clickBtn = document.querySelector('.click');
    let cur_bg = document.getElementById('cur-color');

    let modes = [...document.querySelectorAll('.modes .mode')];
    let current_mode = 'HEX';

    clickBtn.addEventListener('click', () => {
        if (current_mode === 'HEX') {
            let red = Math.floor(Math.random() * 256).toString(16).toUpperCase(),
                green = Math.floor(Math.random() * 256).toString(16).toUpperCase(),
                blue = Math.floor(Math.random() * 256).toString(16).toUpperCase();
            if (red.length < 2) red = '0' + red;
            if (green.length < 2) green = '0' + green;
            if (blue .length < 2) blue = '0' + blue;
            cur_bg.innerHTML = `#${red}${green}${blue}`;
        } else {
            let red = Math.floor(Math.random() * 256),
                green = Math.floor(Math.random() * 256),
                blue = Math.floor(Math.random() * 256);
            cur_bg.innerHTML = `rgba(${red},${green},${blue})`;
        }

        document.body.style.backgroundColor = cur_bg.innerHTML;
    });

    for (let mode of modes) {
        mode.addEventListener('click', () => {
           current_mode = mode.innerHTML;
           for (let m of modes) {
               m.classList.remove('active');
           }
           mode.classList.add('active');
        });
    }


});