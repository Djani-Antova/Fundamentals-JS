function plantDiscovery(input) {

    let result = {}

    let number = Number(input.shift());
    for (let i = 0; i < number; i++) {
        let tokens = input.shift().split('<->');
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        result[plant] = {};
        result[plant].rarity = rarity;
        result[plant].rating = [];
        result[plant].counter = 0;
    }

    while (input[0] !== 'Exhibition') {
        let plantInfo = input.shift().split(": ");
        let command = plantInfo[0];
        let rateInfo = plantInfo[1].split(' - ')
        let plant = rateInfo[0]
        let param = Number(rateInfo[1]);

        if (command == "Rate") {
            let rate = param;
            if (result.hasOwnProperty(plant)) {
                result[plant].rating.push(rate);
                result[plant].counter++
            } else {
                console.log(`error`);
            }

        } else if (command == "Update") {
            let newRarity = param;
            if (result.hasOwnProperty(plant)) {
                result[plant].rarity = newRarity;
            } else {
                console.log(`error`);
            }

        } else if (command == "Reset") {
            if (result.hasOwnProperty(plant)) {
                result[plant].rating = [];
                result[plant].counter = 0;
            } else {
                console.log(`error`);
            }
        }
    }

    console.log(`Plants for the exhibition:`);
    for (const key in result) {
        let average = 0;
        if (result[key].rating.length !== 0) {
            let sum = result[key].rating.reduce((acc, num) => acc + num)
            average = sum / result[key].counter;
        }
        console.log(`- ${key}; Rarity: ${result[key].rarity}; Rating: ${average.toFixed(2)}`)
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
    // console.log('============');
    // plantDiscovery(["2",
    // "Candelabra<->10",
    // "Oahu<->10",
    // "Rate: Oahu - 7",
    // "Rate: Candelabra - 6",
    // "Exhibition"])

