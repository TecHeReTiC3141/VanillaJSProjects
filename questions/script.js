document.addEventListener('DOMContentLoaded', () => {
    let toggle_buttons = [...document.querySelectorAll('.toggle')];
    let questions = [...document.querySelectorAll('.questions li')];

    function open(cur_quest, cur_button) {
        cur_quest.classList.add('active');
        cur_button.classList.add('fa-minus-square');
        cur_button.classList.remove('fa-plus-square');
    }

    function close(cur_quest, cur_button) {
        cur_quest.classList.remove('active');
        cur_button.classList.add('fa-plus-square');
        cur_button.classList.remove('fa-minus-square');
    }

    for (let i = 0; i < toggle_buttons.length; ++i) {
        let cur_button =  toggle_buttons[i];
        cur_button.dataset.quest_number = `${i}`;
        questions[i].dataset.quest_number = `${i}`;
        cur_button.addEventListener('click', () => {
            let cur_quest = questions[Number(cur_button.dataset.quest_number)];
            if (!cur_quest.classList.contains('active')) {
                for (let i = 0; i < toggle_buttons.length; ++i) {
                    close(questions[i], toggle_buttons[i]);
                }
                open(cur_quest, cur_button);
            } else {
                close(cur_quest, cur_button);
            }


        });
    }
});