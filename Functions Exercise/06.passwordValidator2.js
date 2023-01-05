function passwordValidator(password) {

    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10
    }

    function lettersAndDigits(stringPassword) {
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0);
            if (
            !(currChar >= 65 && currChar <= 90) &&
            !(currChar >= 97 && currChar <= 122) &&
            !(currChar >= 48 && currChar <= 57)
            ) {
                return false
            } 
                
        }
        return true    
    }
    function atLeastTwoDigits(stringPassword) {
        let count = 0;
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++
            }
        }
        return count >= 2
    }
    let isLengthValid = isLengthEnough(password);
    let lettersAndDigitsValid = lettersAndDigits(password);
    let atLeastTwoDigitsValid = atLeastTwoDigits(password)

    if (isLengthValid && lettersAndDigitsValid && atLeastTwoDigitsValid) {
        console.log("Password is valid");
    } else {
        if (!isLengthValid) {
            console.log("Password must be between 6 and 10 characters");
        }
        if(!lettersAndDigitsValid) {
            console.log("Password must consist only of letters and digits");
        }
        if (!atLeastTwoDigitsValid) {
            console.log("Password must have at least 2 digits");
        }
    } 
    
}