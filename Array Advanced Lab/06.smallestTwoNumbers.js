function smallestTwoNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b)

    console.log(`${sortedArray[0]} ${sortedArray[1]}`);



    // let result = [];

    // let smallest = Math.min(...array);
    // result.push(smallest)
    // let index = array.indexOf(smallest);
    // array.splice(index, 1);


    // let secondSmallest = Math.min(...array);
    // result.push(secondSmallest);
    // console.log(result.join(' '));   



}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])