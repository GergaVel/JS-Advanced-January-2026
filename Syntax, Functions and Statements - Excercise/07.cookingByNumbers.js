function cookingByNumbers(arg1, ...params){ //convert into arr
    let num = Number(arg1);
    
    for (let i = 0; i < params.length; i++){
        let command = params[i]

        switch(command){
            case "chop": num = num / 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num = num + 1; break;
            case "bake": num = num * 3; break;
            case "fillet": num = num * 0.8; break;
        }

        console.log(num);    
        
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');


//level ADVANCED

function cookingByNumbers(arg1, ...params){ //convert into arr
    const operations = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }
    
    let num = Number(arg1);

    for (let i = 0; i < params.length; i++){
        let command = params[i]

        // as switch can be replaced by and obj (see up)
        // switch(command){
        //     case "chop": num = num / 2; break;
        //     case "dice": num = Math.sqrt(num); break;
        //     case "spice": num = num + 1; break;
        //     case "bake": num = num * 3; break;
        //     case "fillet": num = num * 0.8; break;
        // }
        num = operations[command](num)
        console.log(num);          
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');