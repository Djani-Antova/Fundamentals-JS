function pianist(input) {

    let catalog = {};

    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, composer, key] = input.shift().split('|');
        catalog[name] = {
            composer,
            key
        }
    }

    while (input[0] !== 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0]
        let name = tokens[1]

        if (command == "Add") {
            let composer = tokens[2]
            let key = tokens[3]
            if (catalog[name] !== undefined) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalog[name] = {
                    composer,
                    key,
                }
                console.log(`${name} by ${composer} in ${key} added to the collection!`);
            }

        } else if (command == "Remove") {
            if (catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            }

        } else if (command == "ChangeKey") {
            let newKey = tokens[2]
            if (catalog[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection."`);
            } else {
                catalog[name].key = newKey;
                console.log(`Changed the key of ${name} to ${newKey}!`);
            }
        }
    }

    let sorted = Object.entries(catalog).sort((a, b) => {
        let nameA = a[0];
        let nameB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer

        let keyA = a[1].key
        let keyB = b[1].key

        return nameA.localeCompare(nameB) || composerA.localeCompare(composerB)
    });

    for (let [name, piece] of sorted) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])
console.log('====================');
pianist([
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