function charactersInRange(charOne, charTwo) {
    let a = charOne.charCodeAt();
    let b = charTwo.charCodeAt();

    let buff = '';
    let missingChar;
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            missingChar = String.fromCharCode(i);
            buff += missingChar + " ";
        }
    } else {
        for (let i = b + 1; i < a; i++) {
            missingChar = String.fromCharCode(i);
            buff += missingChar + " "
        }
    }
    console.log(buff);
}
charactersInRange('C','#')