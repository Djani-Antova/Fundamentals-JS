function nonDecreasingSubset(array) {

    let currentBiggest = array[0]

    let result = array.filter(el => {
        if (el >= currentBiggest) {
            currentBiggest = el;
        }
        return el >= currentBiggest;
    })
    console.log(result.join(" "));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
