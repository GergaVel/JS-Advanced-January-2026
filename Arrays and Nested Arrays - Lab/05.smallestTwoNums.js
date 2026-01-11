function twoSmallestNumbers(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr[0] + ' ' + arr[1]);
}


// longer version

function twoSmallestNumbers(arr) {
    let min1 = Infinity;
    let min2 = Infinity;

    for (let num of arr) {   
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    console.log(min1 + ' ' + min2);
}
