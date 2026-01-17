function lowestPrices(data) {
    const result = {};

    for (let el of data){
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        
        //which one is the unique element: town, product or price? --> product
        if (!result.hasOwnProperty(product)){
            result[product] = {town, price};
        } 

        if (result[product].price > price){
            result[product] = {town, price}; //to replace/rewrite the lowest price
        }
    }

    for (let [product, productData] of Object.entries(result)){
        console.log(`${product} -> ${productData.price} (${productData.town})`);
        
    }
}

lowestPrices([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);