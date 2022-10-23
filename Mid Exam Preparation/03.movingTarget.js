function movingTarget(input) {
 
    let sequence = input.shift();
    let sequenceAsNumbers = sequence.split(' ').map(Number) //(6) [52, 74, 23, 44, 96, 110]
    for (let line of input) {
        if (line !== "End") {
            let tokens = line.split(" ");
            let command = tokens[0];
            let index = Number(tokens[1]);
            let power = Number(tokens[2]);
            let isValid = index >= 0 && index < sequenceAsNumbers.length;

            switch (command) {
                case "Shoot":
                    
                    if (isValid) {
                        sequenceAsNumbers[index] -= power
                    }
                    if (sequenceAsNumbers[index] <= 0) {
                        sequenceAsNumbers.splice(index, 1)
                    }
                    break;

                case "Add":                   
                    if (isValid) {
                        sequenceAsNumbers.splice(index, 0, power)
                    } else {
                        console.log("Invalid placement!");
                    }
                    break;

                case "Strike":
                    let radius = Number(tokens[2]);
                    let firstIndex = index - radius;
                    let secondIndex = index + radius;
                    let elementsToRemove = 2*radius + 1;
                    
                    if(firstIndex >= 0 && secondIndex < sequenceAsNumbers.length) {
                        sequenceAsNumbers.splice(firstIndex, elementsToRemove)
                    } else {
                        console.log("Strike missed!");
                    }
                    break;
            }
        }
        if(line === "End") {
            console.log(sequenceAsNumbers.join("|"));
        }
    }
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])

