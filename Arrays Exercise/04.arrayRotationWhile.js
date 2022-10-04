function arrayRotation(array, rotation) {

    
    while (rotation > 0) {
        let elementToMove = array.shift()
        array.push(elementToMove)

        rotation--;

    }


    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([2, 4, 15, 31], 5)