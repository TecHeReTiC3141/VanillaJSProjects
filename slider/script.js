document.addEventListener('DOMContentLoaded', () => {
    let prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');
    let curNumber = document.querySelector('.cur-number');
    let slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; ++i) {
        let slide = slides[i];
        slide.style.left = `${i}00%`;
    }

    let cur_ind = 1;
    prevBtn.addEventListener('click', () => {
        --cur_ind;
        if (cur_ind === 0) {
            slides.forEach((slide, index) => {
                slide.style.left = `-${slides.length - index - 1}00%`;
            });
            cur_ind = slides.length;
        } else {
            slides.forEach(slide => {
                let cur_le = +slide.style.left.slice(0, -1) + 100;
                slide.style.left = `${cur_le}%`;
            });
        }
        curNumber.innerText = cur_ind.toString();
    });
    nextBtn.addEventListener('click', () => {
        ++cur_ind;
        if (cur_ind === slides.length + 1) {
            slides.forEach((slide, index) => {
                slide.style.left = `${index}00%`
            });
            cur_ind = 1;
        } else {
            slides.forEach(slide => {
                let cur_le = +slide.style.left.slice(0, -1) - 100;
                slide.style.left = `${cur_le}%`;
            });
        }
        curNumber.innerText = cur_ind.toString();
    });
});