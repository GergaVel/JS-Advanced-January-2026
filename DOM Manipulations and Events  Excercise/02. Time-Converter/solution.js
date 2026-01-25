function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type="button"]'); //селектиране по атрибути

    buttons.forEach(btn => btn.addEventListener('click', onClick));

    function onClick(e) {
        const parent = e.currentTarget.parentElement;
        const input = parent.querySelector('input[type="text"]');

        const unit = input.id;
        const value = Number(input.value);

        let days;

        switch (unit) {
            case 'days': days = value; break;
            case 'hours': days = value / 24; break;
            case 'minutes': days = value / 24 / 60; break;
            case 'seconds': days = value / 24 / 60 / 60; break;
        }

        const inputs = document.querySelectorAll('input[type="text"]');

        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}


// with a function

function attachEventsListeners() {
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(btn => btn.addEventListener('click', onClick));

    function onClick(e) {
        const parent = e.currentTarget.parentElement;
        const input = parent.querySelector('input[type="text"]');

        const unit = input.id;
        const value = Number(input.value);

        switch (unit) {
            case 'days': updateAll(value); break;
            case 'hours': updateAll(value / 24); break;
            case 'minutes': updateAll(value / 24 / 60); break;
            case 'seconds': updateAll(value / 24 / 60 / 60); break;
        }
    }

    function updateAll(days) {
        const inputs = document.querySelectorAll('input[type="text"]');

        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}
