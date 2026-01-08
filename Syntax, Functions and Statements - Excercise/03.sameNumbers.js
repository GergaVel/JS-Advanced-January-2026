function sameNumbers(num){ //we need to convert the number to string!
    let numAsString = num.toString();
    let firstNum = Number(numAsString[0]); 
    let isSame = true; //otherwise you will have it 100 times if you put it in the for loop
    let sum = 0;

    
    for (let i = 0; i < numAsString.length; i++){        
        let currentNum = Number(numAsString[i]);

        if (currentNum !== firstNum){
            isSame = false;
        }
        sum += Number(currentNum);               
    }
    console.log(isSame);    
    console.log(sum);
    
}

sameNumbers(2222222);
sameNumbers(1234);