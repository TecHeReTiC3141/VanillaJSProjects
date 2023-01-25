document.addEventListener('DOMContentLoaded', () => {
    let menu_items = [
        {
            id: 1,
            name: "buttermilk pancakes",
            category: "breakfast",
            price: 15.99,
            img: "./images/item-1.jpeg",
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            name: "diner double",
            category: "lunch",
            price: 13.99,
            img: "./images/item-2.jpeg",
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            name: "country delight",
            category: "breakfast",
            price: 20.99,
            img: "./images/item-4.jpeg",
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 4,
            name: "egg attack",
            category: "lunch",
            price: 22.99,
            img: "./images/item-5.jpeg",
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 5,
            name: "oreo dream",
            category: "shakes",
            price: 18.99,
            img: "./images/item-6.jpeg",
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 6,
            name: "bacon overflow",
            category: "breakfast",
            price: 8.99,
            img: "./images/item-7.jpeg",
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 7,
            name: "american classic",
            category: "lunch",
            price: 12.99,
            img: "./images/item-8.jpeg",
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            name: "quarantine buddy",
            category: "shakes",
            price: 16.99,
            img: "./images/item-9.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
            id: 10,
            name: "bison steak",
            category: "dinner",
            price: 22.99,
            img: "./images/item-10.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];

    let filters = document.querySelector('.filters');

    function setupFilters() {
        let unique_cats = menu_items.map(item => item.category).filter((value, index, self) =>
            self.indexOf(value) === index);
        filters.append(...unique_cats.map(item => {
           let li = document.createElement('li');
           li.innerHTML = item;
           return li;
        }));
    }
    setupFilters();

    function createElementWithClasses(tag, ...classes) {
        let element = document.createElement(tag);
        for (let cl of classes) {
            element.classList.add(cl);
        }
        return element;
    }

    let content = document.querySelector('.content');

    function create_post(item) {
        let post = createElementWithClasses('div', 'post');
        let photo = createElementWithClasses('img', 'photo', 'image');
        photo.src = item.img;
        let info = createElementWithClasses('div', 'info');
        let header = createElementWithClasses('div', 'header');
        let name = createElementWithClasses('h2', 'name');
        name.innerHTML = item.name;
        let price = createElementWithClasses('p', 'price');
        price.innerHTML = `$ ${item.price}`;
        header.append(name, price);

        let descr = createElementWithClasses('p', 'descr');
        descr.innerHTML = item.desc;
        info.append(header, descr);

        post.append(photo, info);

        content.appendChild(post);
    }

    menu_items.map(create_post);

    let filter_buttons = document.querySelectorAll('.filters li');

    for (let btn of filter_buttons) {
        btn.addEventListener('click', (e) => {
            let cat = e.currentTarget.innerText.toLowerCase();
            console.log(cat);
            content.innerHTML = '';
            if (cat === 'all') {
                menu_items.map(create_post);
            } else {
                menu_items.filter(item => item.category === cat).map(create_post);
            }
        });
    }

});