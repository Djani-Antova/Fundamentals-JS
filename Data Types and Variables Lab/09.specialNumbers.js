function specialNumbers(range) {
    //number is special when its sum of digits is 5, 7 or 11.
    for (let i = 1; i <= range; i++) {
        let numToString = i.toString();

        let sum = 0;

        for (let digit of numToString) {
            sum += Number(digit);
        }
        if (sum === 5 || sum === 7 || sum ===11) {
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(15)