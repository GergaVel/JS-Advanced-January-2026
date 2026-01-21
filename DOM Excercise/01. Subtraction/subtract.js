function subtract() {
    const firstInputRef = document.getElementById('firstNumber'); //returns the html input (all of it) .value returns only the value
    const firstNum = Number(firstInputRef.value); 
    
    const secondInputRef = document.getElementById('secondNumber'); //returns the html input (all of it) .value returns only the value
    const secondNum = Number(secondInputRef.value); 

    let sum = firstNum - secondNum;
    document.getElementById('result').textContent = sum;
}   