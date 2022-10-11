function palindromeIntegers (array) {

    for (const el of array) {

           let currentEl = String(el);
           let reversed = String(el).split('').reverse().join('')
            
        if( currentEl === reversed) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }        
    }
}
palindromeIntegers([32,2,232,1010])