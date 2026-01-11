function solve (matrix) {
    let main = 0;
    let secondary = 0;

    for (let row = 0; row < matrix.length; row++){
        main += matrix[row][row];
    }

    for (let row = 0; row < matrix.length; row++){
        let col = matrix.length - row - 1;
       // console.log(row, col);
        secondary += matrix[row][col];        
    }
    console.log(main,secondary);
}

solve([
    [3, 5, 17], 
    [-1, 7, 14], 
    [1, -8, 89]
]);
