function sumTable() {
    // select first table
    //select all rows
    //filter first and last rows (headers and ouput)
    const rows = Array.from(document.querySelector('table').querySelectorAll('tr')).slice(1, -1);

    //for each row:
    // -- select colums(children) 
    // -- take last column
    // -- parse content asn num and add to sum
    
    let sum = 0;
    for (let row of rows) {
        const lastCol = row.children[row.children.length - 1];
        sum += Number(lastCol.textContent);
    }

   // print output in element with id "sum"
    document.getElementById('sum').textContent = sum;
}