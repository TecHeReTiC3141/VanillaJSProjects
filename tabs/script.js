const sections = {
    'vision': '              <p>\n' +
        '                Man bun PBR&amp;B keytar copper mug prism, hell of helvetica. Synth\n' +
        '                crucifix offal deep v hella biodiesel. Church-key listicle\n' +
        '                polaroid put a bird on it chillwave palo santo enamel pin,\n' +
        '                tattooed meggings franzen la croix cray. Retro yr aesthetic four\n' +
        '                loko tbh helvetica air plant, neutra palo santo tofu mumblecore.\n' +
        '                Hoodie bushwick pour-over jean shorts chartreuse shabby chic.\n' +
        '                Roof party hammock master cleanse pop-up truffaut, bicycle\n' +
        '                rights skateboard affogato readymade sustainable deep v\n' +
        '                live-edge schlitz narwhal.\n' +
        '              </p>\n' +
        '              <ul>\n' +
        '                <li>list item</li>\n' +
        '                <li>list item</li>\n' +
        '                <li>list item</li>\n' +
        '              </ul>',
        'history': '<p>\n' +
            '                I\'m baby wolf pickled schlitz try-hard normcore marfa man bun\n' +
            '                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle\n' +
            '                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard\n' +
            '                tilde try-hard, woke fixie banjo man bun. Small batch tumeric\n' +
            '                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral\n' +
            '                direct trade hoodie ugh chambray, craft beer pork belly flannel\n' +
            '                tacos single-origin coffee art party migas plaid pop-up.\n' +
            '              </p>',
        'goals': '<p>\n' +
        '                Chambray authentic truffaut, kickstarter brunch taxidermy vape\n' +
        '                heirloom four dollar toast raclette shoreditch church-key.\n' +
        '                Poutine etsy tote bag, cred fingerstache leggings cornhole\n' +
        '                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk\n' +
        '                swag, mixtape hashtag marfa readymade direct trade man braid\n' +
        '                cold-pressed roof party. Small batch adaptogen coloring book\n' +
        '                heirloom. Letterpress food truck hammock literally hell of wolf\n' +
        '                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,\n' +
        '                banh mi salvia venmo photo booth quinoa chicharrones.\n' +
        '              </p>',
}

document.addEventListener('DOMContentLoaded', () => {
    let tabNames = document.querySelector('.tab-names');
    let sectionTitle = document.querySelector('.section .title');
    let sectionText = document.querySelector('.section .text');

    for (let title in sections) {
        let newTitle = document.createElement('li');
        newTitle.innerText = title;
        tabNames.append(newTitle);
    }

    function openSection(item) {
        document.querySelectorAll('.tab-names li').forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        sectionTitle.innerText = item.innerText;
        sectionText.innerHTML = sections[item.innerText.toLowerCase()];
    }

    openSection(tabNames.children[0]);

    document.querySelectorAll('.tab-names li').forEach(item => {
        item.addEventListener('click', () => {
            openSection(item);
        });
    })

});