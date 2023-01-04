function oddAndEvenSum(number) {
    let numberAsText = number.toString();
    
    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let curNum = Number(numAsString[i]);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            }
        }
        return oddSum;
    }

    function totalEvenSum(numAsString) {
        let evenSum = 0;
        for (let i = 0; i < numAsString.length; i++) {
            let curNum = Number(numAsString[i]);
            if (curNum % 2 === 0) {
                evenSum += curNum;
            }
        }
        return evenSum;
    }

    let oddSum = totalOddSum(numberAsText);
    let evenSum = totalEvenSum(numberAsText);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}