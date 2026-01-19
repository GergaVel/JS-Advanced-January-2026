function showText() {
    // TODO
    const btn = document.getElementById('more');
    const text = document.getElementById('text');

    text.style.display = 'inline';
    btn.style.display = 'none';
}


// adding a button (show less at the end)

function showText() {
    const more = document.getElementById('more');
    const less = document.getElementById('less');
    const text = document.getElementById('text');

    text.style.display = 'inline';
    more.style.display = 'none';
    less.style.display = 'inline';
}

function hideText() {
    const more = document.getElementById('more');
    const less = document.getElementById('less');
    const text = document.getElementById('text');

    text.style.display = 'none';
    more.style.display = 'inline';
    less.style.display = 'none';
}
