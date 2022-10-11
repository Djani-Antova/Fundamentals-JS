function addAndSubtract(firstNum, secondNum, thirdNum) {

    let sumFirstAndSecond = sum(firstNum, secondNum);
   
    let subtractSumAndThird = subtract(sumFirstAndSecond, thirdNum);
    console.log(subtractSumAndThird);

    function sum(firstNum, secondNum) {
        return firstNum + secondNum

    }

    function subtract (sumFirstAndSecond, thirdNum) {
        return sumFirstAndSecond - thirdNum
        
    }
}
addAndSubtract(1, 17, 30)