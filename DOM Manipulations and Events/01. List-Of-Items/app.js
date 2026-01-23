function addItem() {
    // read input field
    const input = document.getElementById('newItemText');

    //if no content -> do nothing
    if (!input.value){
        return; //early exit --> to not print/add fields which are empty
    }

    // create new li item
    const item = document.createElement('li');
    item.textContent = input.value;

    // populate li item with text
    // find list and append new list item
    const list = document.getElementById('items');
    list.appendChild(item);
    
    // crear input field
    input.value = ' '; //reset
}

