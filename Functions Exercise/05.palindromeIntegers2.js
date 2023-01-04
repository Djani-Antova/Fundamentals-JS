function solve(array) {

    
    function reverse(number) {
        let numAsString = String(number)
        let reversedString = numAsString
            .split('')
            .reverse()
            .join('');
         return reversedString   
    }
    for (const element of array) {
        let reversedElement = reverse(element)
       if(element == reversedElement) {
        console.log("true");
       } else {
        console.log("false");
       }                
    }
}