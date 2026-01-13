//if we have odd number of elements it wont work!

function solve(arr) {
   let res = [];
   arr.sort((a, b) => a - b);

    while (arr.length){
        res.push(arr.shift());
        res.push(arr.pop());
    }
    return res;   
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

//second version
function solve(arr) {
   let res = [];
   arr.sort((a, b) => a - b);

    while (arr.length){
        res.push(arr.shift());
        res.push(arr.pop());
    }
    return res.filter((x) => {
        if (x || x === 0) {
            return true
        }
        return false;
    })   
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);