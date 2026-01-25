//this didn't work
function focused() {
    //add event listener to nearest common parent
    // on focusin add .focus class to input parent (the class we found in the css file)
    // on focusout remove class

    const parent = document.querySelector('div'); //returns only the first div!
    parent.addEventListener('focusin', onFocusIn); // shte izpulnqva navsqkude, no vsushtnost samo input poletata fire focusin -focusout
    parent.addEventListener('focusout', onFocusOut);

    function onFocusIn(event) {
        event.target.parentElement.className = 'focused';
    }

    function onFocusOut(event) {
         event.target.parentElement.className = ' ';
    }
}

//this worked

function focused() {
    const inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.classList.remove('focused');
    }
}
