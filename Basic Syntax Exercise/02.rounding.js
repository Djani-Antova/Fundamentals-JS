function rounding(num, precision) {

    if (precision >= 15) {
        precision = 15;
    }
    num = num.toFixed(precision);
    console.log(parseFloat(num));
}
rounding(3.1415900000000000000, 22)