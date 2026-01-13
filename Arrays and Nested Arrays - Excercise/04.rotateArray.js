function solve(arr, times) {
    if (arr.length === 0) return;

    times %= arr.length;

    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}


console.log(solve(['1','2','3','4'],2));
console.log(solve(['Banana','Orange','Coconut','Apple'], 15));