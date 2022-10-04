function addAndSubtract(array) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement % 2 === 0) {
            currentElement += i;
            newArray.push(currentElement)
        } else {
            currentElement -= i;
            newArray.push(currentElement)
        }

    }
    console.log(newArray);
    sumArray = 0;
    for (const el of array) {
        sumArray += el;
    }
    console.log(sumArray);

    sumNewArray = 0;
    for (const el of newArray) {
        sumNewArray += el;
    }
    console.log(sumNewArray);

}
addAndSubtract([5, 15, 23, 56, 35])
console.log("---------------");
addAndSubtract([-5, 11, 3, 0, 2]);
