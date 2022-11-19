function activationKeys(input) {

    let rawKey = input.shift();
    //console.log(rawKey);

    while (input[0] !== "Generate") {

        let line = input.shift().split('>>>');
        let command = line[0]

        if (command == 'Contains') {
            let stingToCheck = line[1];
            if (rawKey.includes(stingToCheck)) {
                console.log(`${rawKey} contains ${stingToCheck}`);
            } else {
                console.log(`Substring not found!`);
            }

        } else if (command == 'Flip') {
            let subCommand = line[1]
            let startIndex = Number(line[2]);
            let endIndex = Number(line[3]);
            let left = rawKey.substring(0, startIndex);
            let right = rawKey.substring(endIndex);
            let pieceToFlip = rawKey.substring(startIndex, endIndex);
            if (subCommand == 'Upper') {
                pieceToFlip = pieceToFlip.toUpperCase()
            } else if (subCommand == 'Lower') {
                pieceToFlip = pieceToFlip.toLowerCase()
            }
            rawKey = left + pieceToFlip + right;
            console.log(rawKey);

        } else if (command == 'Slice') {
            let start = Number(line[1]);
            let end = Number(line[2]);
            let left = rawKey.substring(0, start);
            let right = rawKey.substring(end);
            rawKey = left + right;
            console.log(rawKey);
        }

    }
    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
