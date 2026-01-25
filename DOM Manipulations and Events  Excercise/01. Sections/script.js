function create(words) {
   const contentRef = document.getElementById('content');

   for (let i = 0; i < words.length; i++){
      const divEl = document.createElement('div');
      const pEl = document.createElement('p');
      pEl.textContent = words[i];
      pEl.style.display = 'none'; //both elements are created but are not in the DOM yet. We need to assign them somewhere
      divEl.appendChild(pEl); 
      contentRef.appendChild(divEl); // now it will appear

      divEl.addEventListener('click', onClick);
    }

    function onClick(event) {
      const target = event.currentTarget;

      // event.target → the deepest clicked element (could be <p>)
      // event.currentTarget → the element that has the listener (the <div>)

      const p = target.children[0];
      const currentState = p.style.display; 
      p.style.display = currentState === 'none' ? 'block' : 'none';
    }
}