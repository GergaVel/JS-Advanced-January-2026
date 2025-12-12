function stringLength(arg1, arg2, arg3) {
    let sumLength = arg1.length + arg2.length + arg3.length;
    console.log(sumLength);    
    let averageLength = Math.floor(sumLength / 3);
    console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');