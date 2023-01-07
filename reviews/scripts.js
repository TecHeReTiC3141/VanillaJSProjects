posts = [
    {
        'img_path': 'Deimos.png',
        'name': 'Deimos Tec',
        'occupation': 'Hacker and Shitcoder',
        'text': 'I\'m baby meggings twee health goth +1.\n' +
            'Bicycle rights tumeric chartreuse before they sold out chambray pop-up.\n' +
            'Shaman humblebrag pickled coloring book salvia hoodie,\n' +
            'cold-pressed four dollar toast everyday carry'
    },
    {
        'img_path': 'New Deimos.png',
        'name': ' New Deimos',
        'occupation': 'Web developer',
        'text': 'cold-pressed four dollar toast everyday carry' +
            'I\'m baby meggings twee health goth +1.\n' +
            'Shaman humblebrag pickled coloring book salvia hoodie,\n' +
            'Bicycle rights tumeric chartreuse before they sold out chambray pop-up.\n'
    },
    {
        'img_path': 'MALEVICH-KAZIMIR-SEVERINOVICH.jpg',
        'name': ' KAZIMIR MALEVICH',
        'occupation': 'Painter',
        'text': 'Now he is dead man' +
            'I\'m baby meggings twee health goth +1.\n' +
            'Shaman humblebrag pickled coloring book salvia hoodie,\n' +
            'Bicycle rights tumeric chartreuse before they sold out chambray pop-up.\n'
    },
]

document.addEventListener('DOMContentLoaded', () => {
    let cur_ind = 0;

    let avatar = document.querySelector('.avatar');
    let name = document.querySelector('.name');
    let occupation = document.querySelector('.occupation');
    let text = document.querySelector('.text');

    function update() {
        avatar.setAttribute('src', `images/${posts[cur_ind].img_path}`);
        name.innerHTML = posts[cur_ind].name;
        occupation.innerHTML = posts[cur_ind].occupation;
        text.innerHTML = posts[cur_ind].text;
    }

    let nxt_btn = document.querySelector('.arrows .nxt-btn');
    let prev_btn = document.querySelector('.arrows .prev-btn');
    let random_btn = document.querySelector('.random');

    nxt_btn.addEventListener('click', () => {
        cur_ind = (cur_ind + 1) % posts.length;
        update();
    });

    prev_btn.addEventListener('click', () => {
        cur_ind = (cur_ind - 1) % posts.length;
        if (cur_ind < 0) {
            cur_ind += posts.length;
        }
        update();
    });

    random_btn.addEventListener('click', () => {
        cur_ind = Math.floor(Math.random() * posts.length);
        update();
    });


});