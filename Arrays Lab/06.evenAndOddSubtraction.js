function evenAndOddSubtraction(array) {

    sumOdd = 0;
    sumEven = 0;
    for (let el of array) {
        el = Number(el);
        if (el % 2 === 0) {
            sumEven += el
        } else {
            sumOdd+=el;
        }
    }
    console.log(sumEven - sumOdd);
    }
    

evenAndOddSubtraction([3,5,7,9])