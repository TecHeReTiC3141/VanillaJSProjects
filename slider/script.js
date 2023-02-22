document.addEventListener('DOMContentLoaded', () => {
    let prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');
    let curNumber = document.querySelector('.cur-number');
    let slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; ++i) {
        let slide = slides[i];
        slide.style.left = `${i}00%`;
    }
    prevBtn.addEventListener('click', () => {
        let cur_num = +curNumber.innerText - 1;
        curNumber.innerText = (cur_num).toString();
        for (let i = 0; i < slides.length; ++i) {
            let slide = slides[i];
            let cur_le = +slide.style.left.slice(0, -1) + 100;
            slide.style.left = `${cur_le}%`;
        }
        if (cur_num === 1) {
            prevBtn.style.display = 'none';
        }
        nextBtn.style.display = 'block';
    });
    nextBtn.addEventListener('click', () => {
        let cur_num = +curNumber.innerText;
        curNumber.innerText = (cur_num + 1).toString();
        for (let i = 0; i < slides.length; ++i) {
            let slide = slides[i];
            let cur_le = +slide.style.left.slice(0, -1) - 100;
            slide.style.left = `${cur_le}%`;
        }

        if (cur_num === slides.length - 1) {
            nextBtn.style.display = 'none';
        }
        prevBtn.style.display = 'block';
    });
});