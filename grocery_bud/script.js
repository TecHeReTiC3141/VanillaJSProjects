document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.list-form');
    let product = document.getElementById('product');
    let actionButton = form.querySelector('.action');
    let toBuyList = document.querySelector('.to-buy');

    const btnContainer = '<div class="btn-container">\n' +
        '                    <button class="edit"><i class="fas fa-edit"></i></button>\n' +
        '                    <button class="delete"><i class="fas fa-trash"></i></button>\n' +
        '                </div>';

    function createElement(tag, innerValue, ...classes) {
        let element = document.createElement(tag);
        element.innerHTML = innerValue;
        classes.forEach(item => {
            element.classList.add(item);
        });
        return element;
    }

    function generateNewItem(val) {
        let newName = createElement('p', val, 'grocery');
        let item = document.createElement('li');

        item.append(newName);
        item.insertAdjacentHTML('beforeend', btnContainer);

        const editBtn = item.querySelector('.edit');
        const deleteBtn = item.querySelector('.delete');
        editBtn.addEventListener('click', () => {

        });
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.parentElement.remove();
        });
        console.log(item);
        toBuyList.appendChild(item);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(product.value, actionButton.value);
        if (!product.value) {
            return;
        }
        if (actionButton.value === 'submit') {
            generateNewItem(product.value);
        } else if (actionButton.value === 'edit') {

        }
    });
});