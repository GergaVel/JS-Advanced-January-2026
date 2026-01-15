function solve(data) {
    for (let i = 0; i < data.length - 1; i++){
        let sumRowOne = 0;
        let sumRowTwo = 0;
        let sumColOne = 0;
        let sumColTwo = 0;

        data[i].forEach(x => sumRowOne += x); //horizontal row 1
        data[i + 1].forEach(x => sumRowTwo += x); // horizontal row 2
        data.forEach(row => sumColOne += row[i]); // vertical col 1
        data.forEach(row => sumColTwo += row[i + 1]); // vertical col 2

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo){
            return false
        }
    }
    return true;
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));