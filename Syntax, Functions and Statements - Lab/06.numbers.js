function numbers (n, m){
    n = Number(n);
    m = Number(m);
    let total = 0;
    for (let i = n; n <= m; n++){
        total += n;       
    }
    console.log(total);
}

numbers('1', '5');
numbers('-8', '20');