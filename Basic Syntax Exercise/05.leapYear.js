function leapYear(num) {
    if ((num % 4 === 0 && num % 100 !== 0 )|| num % 400 === 0) {
        console.log("yes");
    } else {
        console.log('no');
    }

    let a = 5;
    const b = 8;

}
leapYear(1984)
leapYear(2003)
leapYear(4)