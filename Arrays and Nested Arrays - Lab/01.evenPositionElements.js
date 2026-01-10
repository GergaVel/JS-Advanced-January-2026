function evenElements(arr){
    let output = '';
    
    for (let i =0; i < arr.length; i++){
        if (i % 2 === 0){
            output += arr[i];
            output += ' ';
        }
    }

    console.log(output);
    
}

evenElements(['20', '30', '40', '50', '60']);

// version 2

function evenElements(arr){
    let output = '';
    
    for (let i =0; i < arr.length; i += 2){
            output += arr[i];
            output += ' ';
       }

    console.log(output);
    
}

evenElements(['20', '30', '40', '50', '60']);