function perfectNumber(number) {

    let sumOfDividers = 1;

    for (let currentNumber = 2; currentNumber < number; currentNumber++) {

        if (number % currentNumber === 0) {
            sumOfDividers += currentNumber
        }
    }

    let result = (sumOfDividers === number) ?
    `We have a perfect number!` : `It's not so perfect.`;

    console.log(result);
}
perfectNumber(6)