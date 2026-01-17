function storeCatalog(data) {
    const store = {};

    for (let el of data){
        let [name, price] = el.split(' : '); //skips a step of extracting line bty line
        store[name] = Number(price); // obj's can not be sorted! --> we can convert to an arr or:
    }

    // instead of converting the whole obj, you can also do this:

    const sortKey = Object.keys(store).sort((a, b) => a.localeCompare(b));
    let groupChar = '';

    for (let key of sortKey){
       
        if (groupChar !== key[0]){
            groupChar = key[0];
            console.log(groupChar);            
        }      

        console.log(`  ${key}: ${store[key]}`);       
    }

    //whenever we talk abt sorting an obj, we have to always go to another data structure --> arr
}

storeCatalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

// another version