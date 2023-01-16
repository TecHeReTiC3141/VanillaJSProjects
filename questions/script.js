document.addEventListener('DOMContentLoaded', () => {
    let toggle_buttons = [...document.querySelectorAll('.toggle')];
    let questions = [...document.querySelectorAll('.questions li')];
    for (let i = 0; i < toggle_buttons.length; ++i) {
        let cur_button =  toggle_buttons[i];
        cur_button.dataset.quest_number = `${i}`;
        questions[i].dataset.quest_number = `${i}`;
        cur_button.addEventListener('click', () => {
            console.log(cur_button.dataset.quest_number);
            let cur_quest = questions[Number(cur_button.dataset.quest_number)];
            cur_quest.classList.toggle('active');
            cur_button.classList.toggle('fa-plus-square');
            cur_button.classList.toggle('fa-minus-square');
        });
    }
});