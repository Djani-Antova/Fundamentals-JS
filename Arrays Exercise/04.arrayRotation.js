function arrayRotation(array, n) {

    let newArray = array.slice();

    for (let i = 0; i < n; i++) {
        let firstElement = newArray.shift();
        newArray.push(firstElement)

    }
    console.log(newArray.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([2, 4, 15, 31], 5)