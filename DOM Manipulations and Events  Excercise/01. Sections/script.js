function create(words) {
   const contentRef = document.getElementById('content'); // взимаме си референция към контейнера в който ще вкарваме нещо

   for (let i = 0; i < words.length; i++){ //минаваме през масиша от думи
      const divEl = document.createElement('div'); //всяка дума трябва да отиде някъде --> превим и секция с параграф
      const pEl = document.createElement('p');
      pEl.textContent = words[i]; // добавяме current word в параграфа
      pEl.style.display = 'none'; // и казваме: 'скрий съдържанието' 
      //both elements are created but are not in the DOM yet. We need to assign them somewhere
      divEl.appendChild(pEl); // двата нови елемента са създадени, но не са закачени за дървото. Първо вкарваме параграфа в секцията и после закачаме и двете
      contentRef.appendChild(divEl); // now it will appear in the DOM

      divEl.addEventListener('click', onClick); // добавяме действие
    }

    function onClick(event) {
      const target = event.currentTarget; //където се намира евента в момента, не от къде е тръгнал

      // event.target → the deepest clicked element (could be <p>) 
      // event.currentTarget → the element that has the listener (the <div>)

      const p = target.children[0]; // 0, защото знаем, че този параграф има само едно дете
      const currentState = p.style.display; //взимаме текущия state (който зададохме по-горе)
      p.style.display = currentState === 'none' ? 'block' : 'none'; //block means: “Show this element as a normal visible block.”
    }
}