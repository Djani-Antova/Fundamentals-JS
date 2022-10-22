function searchForANumber(arrayOne, arrayTwo) {
    
    let numberToTake = arrayTwo[0];
    let numberToDelete = arrayTwo[1];
    let numberToCheck = arrayTwo[2];

    let arrayTaken = arrayOne.slice(0, numberToTake)

    arrayTaken.splice(0, numberToDelete);
    
    let sum = 0;

    for (let el of arrayTaken) {
        if (el === numberToCheck) {
            sum += 1
        }
    }
    console.log(`Number ${numberToCheck} occurs ${sum} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
                [3, 1, 5])