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

//second version - non of the arrays have been changed
function solve(arr) {
   let res = [];
   arr.sort((a, b) => a - b);

   for (let i = 0; i < arr.length / 2; i++)  {
    let lastIndex = arr.length - 1 - i;

    res.push(arr[i]);
    if (i === lastIndex){
        break; 
    }
    res.push(arr[lastIndex]);
   }    

   return res
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);