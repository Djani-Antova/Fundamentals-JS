function printNthElement(array) {
    
    let l = array.length;

    let step = Number(array[array.length - 1]);
    let newArray = [];

    for (let index = 0; index < array.length - 1; index += step) {
        let element = array[index];
        newArray.push(element)
    }
    console.log(newArray.join(' '));

}
printNthElement(['5', '20', '31', '4', '20', '2'])