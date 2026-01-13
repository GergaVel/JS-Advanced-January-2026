function solve(arr) {
    let result = [];
    result.push(arr.shift());

    for (let el of arr){
        if (el >= result[result.length - 1]){
            result.push(el);
        }
    }

    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]); 