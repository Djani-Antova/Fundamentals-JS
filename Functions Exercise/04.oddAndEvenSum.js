function oddAndEvenSum(num) {
    let numToString = num.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let element = numToString[i];
        if (element % 2 === 0) {
            evenSum += Number(element);
        } else {
            oddSum += Number(element);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
   } 
   oddAndEvenSum(1000435)