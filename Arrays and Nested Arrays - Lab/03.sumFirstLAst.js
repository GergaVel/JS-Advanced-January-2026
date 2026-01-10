function sumFirstLast (arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());

    console.log(first + last);    
}

sumFirstLast(['20', '30', '40']);

//  version 2

function sumFirstLast (arr) {
   let sum = Number(arr.shift()) + Number(arr.pop());
   console.log(sum);
}

sumFirstLast(['20', '30', '40']);