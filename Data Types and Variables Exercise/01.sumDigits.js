function sumDigits(num) {

    let sum = 0;

    let numToString = String(num);
    for (const element of numToString) {
        sum += Number(element)
    }
    console.log(sum);
}
sumDigits(543)