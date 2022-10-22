function sorting(array) {
    let sortedArray = array.sort((a, b) => b - a); //(10) [94, 69, 63, 52, 31, 21, 18, 3, 2, 1]
    
    let result = [];

    for (let i = 0; i < sortedArray.length; i++) {
        if (i === sortedArray.length - 1) {
            result.push(sortedArray[i])
        } else {
            result.push(sortedArray[i]);
            let lastElement = sortedArray.pop();
            result.push(lastElement)
        }
    }
    console.log(result.join(' '));
}
    sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])