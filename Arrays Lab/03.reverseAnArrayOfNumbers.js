function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        let element = arr[i];
        newArr.push(element)        
    }
    let reversed = newArr.reverse().join(' ')
    console.log(reversed);    
}
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])