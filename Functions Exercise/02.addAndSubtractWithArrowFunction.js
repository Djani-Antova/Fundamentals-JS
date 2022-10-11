function addAndSubtract(firstNum, secondNum, thirdNum) {    

    let sum = (firstNum, secondNum) => {
        return firstNum + secondNum
    };

    let subtract = (sumFirstAndSecond, thirdNum)=> {
        return sumFirstAndSecond - thirdNum        
    };
    
    let sumFirstAndSecond = sum(firstNum, secondNum);
   
    let subtractSumAndThird = subtract(sumFirstAndSecond, thirdNum);
    console.log(subtractSumAndThird);
   
}
addAndSubtract(1, 17, 30)