function imitationGame(input) {
    let encryptedMessage = input.shift();   
    

    for (let line of input) {
        let [command, ...rest] = line.split("|").filter( n => n)

        if(line === 'Decode') {
            console.log(`The decrypted message is: ${encryptedMessage}`);
        }

        switch (command) {
            case 'Move':
                let n = Number(rest[0]);
                let firstSection = encryptedMessage.substring(0, n);
                let secondSection = encryptedMessage.substring(n);
                encryptedMessage = secondSection + firstSection;
                break;

            case 'Insert':
                let index = Number(rest[0]);
                let value = rest[1];
                encryptedMessage = encryptedMessage.substring(0, index) + value + encryptedMessage.substring(index);
                break;

            case 'ChangeAll':
                let toChange = rest[0];
                let replacement = rest[1];

                for (let i = 0; i < encryptedMessage.length; i++) {
                    let char = encryptedMessage[i];
                    if (char === toChange) {
                        encryptedMessage = encryptedMessage.replace(toChange, replacement)
                    }

                }
                break;
        }  
    }

}
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  )