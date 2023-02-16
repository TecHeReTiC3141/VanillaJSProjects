document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.list-form');
    let product = document.getElementById('product');
    let actionButton = form.querySelector('.action');
    let toBuyList = document.querySelector('.to-buy');
    let message = document.querySelector('.message');
    let clearBtn = document.querySelector('.clear');

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

    function generateNewItem(val, iden=Date.now()) {
        let newName = createElement('p', val, 'grocery');
        let item = document.createElement('li');

        item.append(newName);
        item.insertAdjacentHTML('beforeend', btnContainer);
        item.dataset.iden = iden;
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
            deleteFromLocalStorage(iden);
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
        addToLocalStorage(iden, val);
    }

    function addMessage(value, type) {
        message.innerText = value;
        message.classList.add(type);

        setTimeout(() => {
            message.innerText = '';
            message.classList.remove(type);
        }, 1000);
    }

    function returnToDefault() {
        product.value = '';
        actionButton.value = 'submit';
        delete actionButton.dataset.curEdit;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!product.value) {
            addMessage('please enter value', 'error');
        } else if (actionButton.value === 'submit') {
            generateNewItem(product.value);
            addMessage('new item was added', 'success');
            returnToDefault();
        } else if (actionButton.value === 'edit') {
            let editedItem = document.querySelector(
                `.to-buy li[data-iden="${actionButton.dataset.curEdit}"]`);
            editedItem.querySelector('.grocery').innerHTML = product.value;
            addToLocalStorage(editedItem.dataset.iden, product.value);
            addMessage('value was changed', 'success');
            returnToDefault();
        }
    });

    clearBtn.addEventListener('click', () => {
        while (toBuyList.firstChild) {
            console.log(toBuyList.lastChild);
            deleteFromLocalStorage(toBuyList.lastChild.dataset.iden);
            toBuyList.removeChild(toBuyList.lastChild);
        }
        addMessage('items cleared', 'error');
        clearBtn.style.display = 'none';
        returnToDefault();
    });

    function restoreItems() {
        for (let key of Object.keys(localStorage)) {
            generateNewItem(localStorage.getItem(key), key);
        }
    }

    function addToLocalStorage(id, value) {
        console.log(`${id} with value ${value} was added to LS`)
        localStorage.setItem(id, value);
    }

    function deleteFromLocalStorage(id) {
        console.log(`${id} with value ${localStorage.getItem(id)} was deleted from LS`)
        localStorage.removeItem(id);
    }

    restoreItems();
});
