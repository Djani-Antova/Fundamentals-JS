function leapYear(num) {

    let result = (num % 4 === 0 && num % 100 !== 0) || num % 400 === 0 ? "yes" : "no"
    console.log(result);

}
leapYear(1984)
leapYear(2003)
leapYear(4)