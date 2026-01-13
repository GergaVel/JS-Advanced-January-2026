function solve(arr){
    arr.sort((a,b) => {
        if (a.length !== b.lenght){
            return a.lenght - b.lenght;
        }
        return a.localeCompare(b);
    })
    console.log(arr.join('\n'));    
}


solve(['alpha','beta','gamma']);