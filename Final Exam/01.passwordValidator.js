function passwordValidator(input) {
    let password = input.shift();
 
    while (input[0] !== "Complete") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
 
        switch (command) {
            case "Make":
                let caseOption = tokens[1];
                let index = Number(tokens[2]);
 
                if (caseOption === "Upper") {
                    let word = password.substring(index, index + 1)
                    let letter = password.substring(index, index + 1).toUpperCase()
                    password = password.replace(word, letter)
                    console.log(password);
                } else if (caseOption === "Lower") {
                    let word = password.substring(index, index + 1)
                    let letter = password.substring(index, index + 1).toLowerCase()
                    password = password.replace(word, letter)
                    console.log(password);
                }
                break;
            case "Insert":
                let i = tokens[1];
                let letter = tokens[2];
                password = password.substring(0, i) + letter + password.substring(i,)
                console.log(password);
 
                break;
            case "Replace":
                let currentValue = tokens[1]
                let indexCurrentValue = (tokens[1]).charCodeAt(0)
                let value = Number(tokens[2])
                let sum = indexCurrentValue + value;
                let newChar = String.fromCharCode(sum);
                password = password.split(currentValue).join(newChar)
                console.log(password);
                break;
 
            case "Validation":
                let nonChar = /\W/g;
                let upperCase = /[A-Z]/g;
                let lowerCase = /[a-z]/g;
                let digit = /\d/g;
                let matchNonchar = password.match(nonChar);
                let matchUpperCase = password.match(upperCase);
                let matchLowerCase = password.match(lowerCase);
                let matchDigit = password.match(digit);
 
                if (password.length < 8) {
                    console.log(`Password must be at least 8 characters long!`);
                }
                if (matchNonchar) {
                    console.log(`Password must consist only of letters, digits and _!`);
                }
                if (!matchUpperCase) {
                    console.log(`Password must consist at least one uppercase letter!`);
                }
                if (!matchLowerCase) {
                    console.log(`Password must consist at least one lowercase letter!`);
                }
                if (!matchDigit) {
                    console.log(`Password must consist at least one digit!`);
                }
        }
    }
}
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'])
// passwordValidator (['invalidpassword*',
// 'Add 2 p',
// 'Replace i -50',
// 'Replace * 10',
// 'Make Upper 2',
// 'Validation',
// 'Complete'])
