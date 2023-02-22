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
        curNumber.innerText = cur_ind.toString();
        for (let i = 0; i < slides.length; ++i) {
            let slide = slides[i];
            let cur_le = +slide.style.left.slice(0, -1) + 100;
            slide.style.left = `${cur_le}%`;
        }
        if (cur_ind === 1) {
            prevBtn.style.display = 'none';
        }
        nextBtn.style.display = 'block';
    });
    nextBtn.addEventListener('click', () => {
        ++cur_ind;
        curNumber.innerText = cur_ind.toString();
        for (let i = 0; i < slides.length; ++i) {
            let slide = slides[i];
            let cur_le = +slide.style.left.slice(0, -1) - 100;
            slide.style.left = `${cur_le}%`;
        }

        if (cur_ind === slides.length) {
            nextBtn.style.display = 'none';
        }
        prevBtn.style.display = 'block';
    });
});