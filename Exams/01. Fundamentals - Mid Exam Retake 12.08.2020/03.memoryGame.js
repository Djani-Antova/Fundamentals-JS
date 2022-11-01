function memoryGame(input) {
    let sequence = input.shift().split(" ");
    let moves = 0;

    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        if (line !== "end") {
            let [firstIndex, secondIndex] = line.split(" ").map(Number);        

            let isInvalidInput = (firstIndex < 0 || firstIndex >= sequence.length) || (secondIndex < 0 || secondIndex >= sequence.length) || firstIndex === secondIndex;

            if (isInvalidInput) {
                console.log('Invalid input! Adding additional elements to the board');
                moves++;
                let addedNumber = `-${moves}a`;
                // let middlePlace = Math.trunc(sequence.length / 2)
                let firstSequence = sequence.slice(0, (sequence.length / 2))
                let secondSequence = sequence.slice((sequence.length / 2))
                sequence = firstSequence.concat(addedNumber, addedNumber, secondSequence)

            } else if (sequence[firstIndex] === sequence[secondIndex]) {
                    console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
                    moves++;
                    if(firstIndex > secondIndex ) {
                        sequence.splice(firstIndex, 1);
                        sequence.splice(secondIndex, 1)
                    } else {
                        sequence.splice(secondIndex, 1);
                        sequence.splice(firstIndex, 1)
                    }
                  //  sequence = sequence.filter(e => e !== sequence[firstIndex])
                } else if (sequence[firstIndex] !== sequence[secondIndex]) {
                    console.log(`Try again!`); 
                }                    
            if (sequence.length === 0) {
                console.log(`You have won in ${moves} turns!`);
                return;
            }             
        }
    }
    console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"])
// memoryGame([
//     "a 2 4 a 2 4",
//     "4 0",
//     "0 2",
//     "0 1",
//     "0 1",
//     "end"])
// memoryGame
//     (["1 1 2 2 3 3 4 4 5 5",
//         "1 0",
//         "-1 0",
//         "1 0",
//         "1 0",
//         "1 0",
//         "end"])

