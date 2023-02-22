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
            for (let i = 0; i < slides.length; ++i) {
                slides[i].style.left = `-${slides.length - i - 1}00%`;
            }
            cur_ind = slides.length;
        } else {
            for (let i = 0; i < slides.length; ++i) {
                let slide = slides[i];
                let cur_le = +slide.style.left.slice(0, -1) + 100;
                slide.style.left = `${cur_le}%`;
            }
        }
        curNumber.innerText = cur_ind.toString();
    });
    nextBtn.addEventListener('click', () => {
        ++cur_ind;
        if (cur_ind === slides.length + 1) {
            for (let i = 0; i < slides.length; ++i) {
                slides[i].style.left = `${i}00%`;
            }
            cur_ind = 1;
        } else {
            for (let i = 0; i < slides.length; ++i) {
                let slide = slides[i];
                let cur_le = +slide.style.left.slice(0, -1) - 100;
                slide.style.left = `${cur_le}%`;
            }
        }
        curNumber.innerText = cur_ind.toString();
    });
});