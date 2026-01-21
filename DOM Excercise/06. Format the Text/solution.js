function solve() {
const input = document.getElementById('input').value; //we don;t do many things with it, that's why we take directly the value
const outputRef = document.getElementById('output'); 

outputRef.innerHTML = '';
const text = input.split('.').filter(x => !!x); //to split the long texts --> reterns arr with each sentance as element. an empty str at the end, that's why filter

for (let i = 0; i <text.length; i += 3){
  let result = []; //to push the <p>'s

    for (let x = 0; x < 3; x++) {
      if (!text[i+x]){
        break; 
      }
      result.push(text[i + x]); 
    }
    let buff = result.join('.') + '.'; // after last el, no .
    outputRef.innerHTML += `<p>${buff.trim()}</p>`  // iinerHTML bc we add directly, not = but +=
}

}