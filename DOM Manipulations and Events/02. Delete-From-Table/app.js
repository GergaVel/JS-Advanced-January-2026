function deleteByEmail() {
    // read input field
    
    /* here I confused the getElementsByName() which is plural!!! I asked gpt, 'why not getElementByName?'
            getElementById	-- single element -- IDs are unique
            getElementsByName -- collection -- names are not guaranteed unique
            querySelector -- single element --	flexible, modern
            querySelectorAll --	collection -- flexible, modern
    */
    const input = document.querySelector('[name="email"]'); // we have name ->  Email: <input type="text" name="email" />, so we search by name
    const pattern = input.value; // what we give in the field

    // scan table rows

    const rows = Array.from(document.querySelector('tbody').children);
    
    // compare text of second col with input.value
    let found = false;

    for (let row of rows){
        //console.log(row.children[1].text) returns only the emails as text!!!
        // if match -> delete row
        if ((row.children[1].textContent === pattern)){
            row.remove();
            found = true;
        } 
    } 
  
    // if a row was deleted -> print 'Deleted', else --> not found
    const output = document.getElementById('result');
    if (found) {
        output.textContent = 'Deleted.';
        input.value = ' '; // clear field only if we have deleted something
    } else {
        output.textContent = 'Not found.';
    }
}