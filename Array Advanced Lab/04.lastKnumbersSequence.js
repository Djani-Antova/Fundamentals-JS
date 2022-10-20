function generateSequence(length, k) {
    let sequence = [1];
    
    for (let i = 1; i < length; i++) {
        let index = Math.max(sequence.length - k, 0);

        let lastElements = sequence.slice(index);
        let sum = 0;
        for (const el of lastElements) {
            sum += el;
        }

        sequence.push(sum);
    }

    console.log(sequence.join(' '));
}

generateSequence(6, 3);
