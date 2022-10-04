function sumEvenNumbers(array) {

    sum = 0;
    for (let el of array) {
        el = Number(el);
        if (el % 2 === 0) {
            sum += el
        }
    }
    console.log(sum);
}
sumEvenNumbers(['3','5','7','9'])