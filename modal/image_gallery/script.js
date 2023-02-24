document.addEventListener('DOMContentLoaded', () => {
    let images = [...document.querySelectorAll('.gallery .card img')];

    let picture_descr = document.querySelector('.picture-descr');
    let picture_descr_big_img = document.querySelector('.picture-descr .big-img');
    let picture_descr_title = document.querySelector('.picture-descr .title');
    let picture_descr_close = document.querySelector('.picture-descr .close');

    for (let image of images) {
        image.addEventListener('click', () => {
            console.log(image.attributes['src']);
            picture_descr.classList.add('active');
            picture_descr_big_img.setAttribute('src', image.getAttribute('src'));
            picture_descr_title.innerHTML = image.dataset['title'];
        });

    }

    picture_descr_close.addEventListener('click', () => {
        picture_descr.classList.remove('active');
    })
});