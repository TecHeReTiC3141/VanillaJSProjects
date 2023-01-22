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

    toggle_buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            let par_question = e.currentTarget.parentElement.parentElement;
            console.log(par_question);

            if (par_question.classList.contains('active')) {
                close(par_question, btn);
            } else {
                for (let i = 0; i < toggle_buttons.length; ++i) {
                    close(questions[i], toggle_buttons[i]);
                }
                open(par_question, btn);
            }
        });
    })
});