function sortNumber(firstNum, secondNum, thirdNum) { 

    let myArray = [firstNum, secondNum, thirdNum];

    myArray.sort(function (a, b) {
        return b - a;
    });

    for (const element of myArray) {
        console.log(element);
    }

}
sortNumber(2, 1, 3)
