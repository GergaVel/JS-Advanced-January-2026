/*
// without the new methods
function oddPositions(arr) {
    //find elements in odd positions

    let filtered = [];

    for (let i = 0; i < arr.length; i++){
        if (i % 2 === 1){
            filtered.push(arr[i]);
        }       
    }
    // double them

    let doubled = [];

    for (let i = 0; i < filtered.length; i++){
        doubled.push(filtered[i] * 2);
    }    
    // reverse them

    doubled.reverse();
    console.log(doubled.join(' '));    
}

oddPositions([10, 15, 20, 25]);
oddPositions([3, 0, 10, 4, 7, 3]);


// with the new methods
function oddPositions(arr) {
    let filtered = arr.filter((e, i) => i % 2 === 1);

    // for (let i = 0; i < arr.length; i++){
    //     if (i % 2 === 1){
    //         filtered.push(arr[i]);
    //     }       
    // }


    let doubled = filter.map(e => e * 2);

    // for (let i = 0; i < filtered.length; i++){
    //     doubled.push(filtered[i] * 2);
    // }    
    
    doubled.reverse();
    console.log(doubled.join(' '));    
}

oddPositions([10, 15, 20, 25]);
oddPositions([3, 0, 10, 4, 7, 3]);
*/
// shorter vrsion

const solve = (arr) => arr
      .filter((e, i) => i % 2 === 1)
      .map(e => e * 2)
      .reverse()
      .join(' ');
                       

console.log(solve([10, 15, 20, 25]));


