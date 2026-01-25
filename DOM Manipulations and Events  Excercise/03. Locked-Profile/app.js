function lockedProfile() {
    document.querySelectorAll('button')
        .forEach(btn => btn.addEventListener('click', onClick)); //we take all the buttons, one on each card

    function onClick(e){
        const btn = e.currentTarget; // first we take the single button == currnetTarget
        const profile = btn.parentElement; // then we take the whole card
        const radioBtn = Array.from(profile.querySelectorAll('input[type="radio"]')); //we take the lock-unlock radio btns - not from document but from the card!!!
            .filter(input => input.checked)[0];
        const profileState = radioBtn.value; // we take the value
        const infoDiv = profile.querySelector('div'); // extract the hidden info again from the card
        
        if (profileState === 'lock'){
            return;
        } 

        if (btn.textContent === 'Show more') {
            infoDiv.style.display = 'block';
            btn.textContent = 'Hide it'
        } else {
            infoDiv.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}