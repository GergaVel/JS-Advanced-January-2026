function circleArea(input) {
    let result = 0;
    let inputType = typeof input;
    
    if (inputType === 'number') {
        result = Math.PI * input ** 2;
        console.log(result.toFixed(2));        
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);    
    }
}

circleArea(5);
circleArea('name');