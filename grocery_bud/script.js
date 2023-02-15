document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.list-form');
    let product = document.getElementById('product');
    let actionButton = form.querySelector('.action');
    let toBuyList = document.querySelector('.to-buy');
    let message = document.querySelector('.message');
    let clearBtn = document.querySelector('.clear');

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
            actionButton.value = 'submit';
            product.value = '';
            deleteBtn.parentElement.parentElement.remove();
            console.log(toBuyList.children);
            if (!toBuyList.hasChildNodes()) {
                clearBtn.style.display = 'none';
            }
            addMessage('item removed', 'error');
        });
        console.log(item);
        toBuyList.appendChild(item);
        clearBtn.style.display = 'block';
    }

    function addMessage(value, type) {
        message.innerText = value;
        message.classList.add(type);

        setTimeout(() => {
            message.innerText = '';
            message.classList.remove(type);
        }, 1000);
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(product.value, actionButton.value);
        if (!product.value) {
            addMessage('please enter value', 'error');
        } else if (actionButton.value === 'submit') {
            generateNewItem(product.value);
            addMessage('new item was added', 'success');
        } else if (actionButton.value === 'edit') {
            console.log(actionButton.dataset.curEdit);
            let editedItem = document.querySelector(
                `.to-buy li[data-iden="${actionButton.dataset.curEdit}"]`);
            editedItem.querySelector('.grocery').innerHTML = product.value;
            delete actionButton.dataset.curEdit;
            addMessage('value was changed', 'success');
            actionButton.value = 'submit';
        }
        product.value = '';
    });


    clearBtn.addEventListener('click', () => {
        toBuyList.replaceChildren();
        addMessage('items cleared', 'error');
        clearBtn.style.display = 'none';
    });
});
