function printSquare(size) { 
    for (let i = 0; i < size; i++) { // rows
        let line = '';
        for (let j = 0; j < size; j++) { // columns
            line += '* ';
        }
        console.log(line);
    }
}

printSquare(5)


