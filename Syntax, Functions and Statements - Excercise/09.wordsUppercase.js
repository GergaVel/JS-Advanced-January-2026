// version A

function words(text) {
    let wordArr = text.split(/[\W]+/); //problem: adds empty "" at the last element

    let result = [];

    for (let i = 0; i < wordArr.length; i++){
        let currentWord = wordArr[i];

        if (currentWord){
            result.push(currentWord);
        }
    }

    console.log(result.join(', ').toUpperCase());        
}

words('Hi, how are you?'); 


//version B

function words(text) {
    let wordArr = text.split(/[\W]+/); //problem: adds empty "" at the last element

    // let result = [];

    // for (let i = 0; i < wordArr.length; i++){
    //     let currentWord = wordArr[i];

    //     if (currentWord){
    //         result.push(currentWord);
    //     }
    // }
    
    
    //let result = wordArr.filter(x => x !== ""); //instead of for loop
    //console.log(result.join(', ').toUpperCase()); 
    
    //OR

    console.log(wordArr.filter(x => x !== "").join(", ").toUpperCase());    
}

words('Hi, how are you?'); 