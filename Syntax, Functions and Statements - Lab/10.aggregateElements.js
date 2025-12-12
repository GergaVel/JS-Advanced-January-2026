    function aggregateElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let concatenation = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];               // Sum(ai)
        inverseSum += 1 / arr[i];    // Sum(1/ai)
        concatenation += arr[i];     // Concat(ai)
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenation);
}
