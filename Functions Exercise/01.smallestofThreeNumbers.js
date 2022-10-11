function smalestOfAllThreeNumbers(firstNum, secondNum, thirdNum) {
    let smallest = firstNum;
    if (secondNum < firstNum && secondNum < thirdNum) {
        smallest = secondNum;
    }
    if (thirdNum < firstNum && thirdNum < secondNum) {
        smallest = thirdNum;
    }
    console.log(smallest);
}
smalestOfAllThreeNumbers(2, 2, 2 );
