function specialNumbers(n) {
    let isSpecial = false;


    for (let i = 1; i <= n; i++) {
        let currentNum = i;

        let currentNumToString = currentNum.toString();
        let currentNumToStringInDigit = currentNumToString.split('');

        let sum = 0;

        for (let j = 0; j < currentNumToStringInDigit.length; j++) {
            sum += Number(currentNumToStringInDigit[j]);
        }
        

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True";

        } else {
            isSpecial = "False"
        }
        console.log(`${currentNumToString} -> ${isSpecial}`);
    }

}
specialNumbers(20)