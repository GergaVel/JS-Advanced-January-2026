function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [input, output] = document.querySelectorAll('textarea');
  const tableRef = document.querySelector('table tbody');

  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onGenerateOrder);
  
  function onGenerate() {
    const data = JSON.parse(input.value);

    for (let el of data){
      const tr = createTableRow(el);
      tableRef.appendChild(tr);
    }
  }

  function onGenerateOrder() {
    const selectItem = document.querySelectorAll('input[type="checkbox"]:checked'); 

    for (const item of selectItem) {
      const tr = item.parentElement.parentElement;
      const [imgTd, nameTd, priceTd, decFactorTd] = tr.children;
    }

  }

  function createTableRow(el){
    const tr = document.createElement('tr');
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = el.img;
    imgTd.appendChild(img);
    tr.appendChild(imgTd);

    const nameTd = document.createElement('td');
    const nameP = document.createElement('p');
    nameP.textContent = el.name;

    nameTd.appendChild(nameP);
    tr.appendChild(nameTd);

    const priceTd = document.createElement('td');
    const priceP = document.createElement('p');
    priceP.textContent = el.price;

    tr.appendChild(priceTd);
    priceTd.appendChild(priceP);

    const decFactorTd = document.createElement('td'); 
    const decFactorP = document.createElement('p');
    decFactorP.textContent = el.deFactor;
    
    tr.appendChild(decFactorTd);
    decFactorTd.appendChild(decFactorP);

    const inputTd = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'checkbox';

    inputTd.appendChild(input);
    tr.appendChild(inputTd);
    
    return tr;
  }
}