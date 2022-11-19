function imitationGame(input) {

    let result = input.shift();

    while (input[0] !== 'Decode') {
        let tokens = input.shift().split('|')
        let command = tokens[0];


        if (command == 'Move') {
            let index = Number(tokens[1]);
            let left = result.substring(0, index);
            let right = result.substring(index);

            result = right + left;

        } else if (command == 'Insert') { 
            let index = Number(tokens[1]);
            let value = tokens[2];
            let left = result.substring(0, index);
            let right = result.substring(index);

            result = left + value + right;        

        } else if (command == 'ChangeAll') {         
            result = result.split(tokens[1]).join(tokens[2]);
        }
    }
    console.log(`The decrypted message is: ${result}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  )