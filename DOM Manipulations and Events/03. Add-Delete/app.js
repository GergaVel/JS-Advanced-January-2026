function addItem() {
    //literal copy of task 01 - list or items
    const input = document.getElementById('newItemText'); 
   
    if (!input.value){
        return; 
    }

    const item = document.createElement('li');
    item.textContent = input.value;
    // create delete button/anchor & append to item

    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    // add functionality for deletion
    function onDelete(event) {
        const row = event.target.parentElement;
        row.remove();
    }

    //when delete is clicked:
    // --> from event target
    // --> select parent el 
    // --> remove from DOM



    const list = document.getElementById('items');
    list.appendChild(item);

    input.value = ' ';
}