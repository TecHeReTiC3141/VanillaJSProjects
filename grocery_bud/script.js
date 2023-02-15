document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.list-form');
    let product = document.getElementById('product');
    let actionButton = form.querySelector('.action');
    let toBuyList = document.querySelector('.to-buy');

    let idCounter = 0;

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
        item.dataset.iden = (++idCounter).toString();
        const editBtn = item.querySelector('.edit');
        editBtn.dataset.iden = item.dataset.iden;
        const deleteBtn = item.querySelector('.delete');
        editBtn.addEventListener('click', () => {
            actionButton.value = 'edit';
            product.value = item.querySelector('.grocery').innerHTML;
            actionButton.dataset.curEdit = editBtn.dataset.iden;
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
            console.log(actionButton.dataset.curEdit);
            let editedItem = document.querySelector(
                `.to-buy li[data-iden="${actionButton.dataset.curEdit}"]`);
            editedItem.querySelector('.grocery').innerHTML = product.value;
            delete actionButton.dataset.curEdit;
            actionButton.value = 'submit';
        }
        product.value = '';
    });

    let clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', () => {
        toBuyList.replaceChildren();
    });
});