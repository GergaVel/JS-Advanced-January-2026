function pieceOfPie(pies, startPie, endPie) {
    let startIndex = pies.indexOf(startPie);
    let endIndex = pies.indexOf(endPie);

    return pies.slice(startIndex, endIndex + 1);
}

pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
     
    'Key Lime Pie',
    'Lemon Meringue Pie'
);