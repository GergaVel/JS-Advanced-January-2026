function solve(input) {
    //create buffer variable === Obj
    const result = {};
    
    //parse input - bc we have an array, we need a loop
    for (let entry of input){
       const tokens = entry.split(' <-> ');
       const townName = tokens[0];
       const population = Number(tokens[1]);
    
    // store population + if town excists, sum population, else -> add new value
        if (result.hasOwnProperty(townName) == false){
           // result[townName] = population; } else {result[townName] += population;}
            result[townName] = 0;
        } 
            result[townName] += population;
    
    }
    
    // print result: can do with Obj.entries or for in loop
    for (let townName in result){
            console.log(`${townName} : ${result[townName]}`);
    }   
}

solve([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

// solve([
// 'Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000'
// ]);