function lastKNumbersSequence(n, k) {
    let sequence = [1];

    while (sequence.length < n) {
        let lastK = sequence.slice(-k);

        let sum = lastK.reduce((a, b) => a + b, 0);

        sequence.push(sum);
    }

    return sequence;
}
