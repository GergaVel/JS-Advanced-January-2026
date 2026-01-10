function positiveNegativeNums(arr) {
    let result = [];

    for (el of arr){
        if (el >= 0){
            result.push(el);
        } else {
            result.unshift(el)        }
    }

    console.log(result);
    

}

positiveNegativeNums([7, -2, 8, 9]);
positiveNegativeNums([3, -2, 0, -1]);