function huntingGames(input) {

    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());
    let totalWater = waterPerPerson * players * days;
    let totalFood = foodPerPerson * players * days;
    
    let currentDay = 1;

    for (let i = 0; i < input.length; i++) {
        let lostEnergy = Number(input[i]);
        energy -= lostEnergy;
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if (currentDay % 2 === 0) {
            totalWater *= 0.7;
            energy *= 1.05;
        }
        if (currentDay % 3 === 0) {
            totalFood -= totalFood / players;
            energy *= 1.10;
        }
        currentDay++;
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }

}
huntingGames(["12",
    "6",
    "4430",
    "9.8",
    "5.5",
    "620.3",
    "840.2",
    "960.1",
    "220",
    "340",
    "674",
    "365",
    "345.5",
    "212",
    "412.12",
    "258",
    "496"])

