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

// solution with .reduce()

function solve(arr) {
    return arr.reduce((acc, el) => {
        if (acc.length === 0) {
            acc.push(el);
        } else if (el >= acc[acc.length - 1]){
            acc.push(el);
        } 
        return acc
        
    }, []); //it's important to return some result --> the acc otherwise it wouldn't work
}