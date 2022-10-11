function charactersInRange(charOne, charTwo) {

    let a = charOne.charCodeAt(0);
    let b = charTwo.charCodeAt(0);
    let startChar = Math.min(a, b);
    let endChar = Math.max(a, b)

    let charsInRangeArray =[];

    for (let i = startChar + 1; i < endChar; i++) {
        missingChar = String.fromCharCode(i);
        charsInRangeArray.push(missingChar);
    }
    console.log(charsInRangeArray.join(' '));
}
charactersInRange('C', '#')