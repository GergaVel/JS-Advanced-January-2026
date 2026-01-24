function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const output = document.getElementById('result');

    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);

    function onMouseMove(event) {
        const percent = Math.floor(event.offsetX / gradient.clientWidth * 100);
        output.textContent = percent + '%';
    }

    function onMouseOut() {
        output.textContent = '';
    }
}
