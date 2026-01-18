function townsToJSON(data){
    let result = [];
    
    // extract the headers 'Town', 'La', 'Lo' --> they will be the keys. Be careful with the | and spaces (RegEx)    
    const [headerA, headerB, headerC] = data
        .shift() //to extract whatever is before bs we don't need it
        .split(/\s?\|\s?/)
        .filter(x => !!x); //This filters out falsy values, keeping only truthy ones. To fiter out: "", null, undefined, 0, NaN, false


    // loop through the arr to take the info
    for (let el of data){
        let [town, la, lo] = el
            .split(/\s?\|\s?/)
            .filter(x => !!x);

        la = Number(la).toFixed(2); //back to string
        lo = Number(lo).toFixed(2);

        // create an object and assign the data
        const info = {};

        info[headerA] = town;
        info[headerB] = Number(la); //back to a num
        info[headerC] = Number(lo);

        // end result needs to be an array, so create an array in the beginning and push the obj
        result.push(info);
    }
    //parse to JSON
    console.log(JSON.stringify(result));    
}



townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
