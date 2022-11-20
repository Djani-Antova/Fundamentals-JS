function thePianist(input) {
    let n = Number(input.shift());

    let catalog = {}

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        catalog[piece] = [];
        catalog[piece].push(composer);
        catalog[piece].push(key);
    }
    while (input[0] !== 'Stop') {
        let lineInfo = input.shift().split('|')
        let command = lineInfo[0];
        let piece = lineInfo[1];
       
        if (command == 'Add') {
            if (catalog[piece] == undefined) {
                let composer = lineInfo[2];
                let key = lineInfo[3];
                catalog[piece] = [];
                catalog[piece].push(composer);
                catalog[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (command == 'Remove') {
            if(catalog[piece] !== undefined) {
                delete catalog[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command == 'ChangeKey') {
           let newKey = lineInfo[2];

            if(catalog[piece] !== undefined) {
               catalog[piece][1] = newKey;
               console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

    }

    let entries = Object.entries(catalog);
    for (const entry of entries) {
        console.log(`${entry[0]} -> Composer: ${entry[1][0]}, Key: ${entry[1][1]}`);       
    }  

}

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'])
    thePianist([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'
      ]
      )