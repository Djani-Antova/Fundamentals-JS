function rightPlace(firstString, char, secondString) {
    let newStr = '';

    for (let i = 0; i < firstString.length; i++) {

        if (firstString[i] !== "_") {
            newStr += firstString[i];
        } else {
            newStr += char;
        }
    }
    if (newStr === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong')