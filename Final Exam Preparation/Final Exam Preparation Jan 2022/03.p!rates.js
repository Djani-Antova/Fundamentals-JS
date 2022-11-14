function pirates(input) { //now writing it!

    let obj = {};

    let currentLine = input.shift()

    while (currentLine !== "Sail") {
        let [town, population, gold] = currentLine.split("||");
        population = Number(population);
        gold = Number(gold)

        if (!obj[town]) {
            obj[town] = { population, gold };
        }
        else {
            obj[town].population += population;
            obj[town].gold += gold;
        }
        currentLine = input.shift();
    }

    let nextLine = input.shift();

    while (nextLine !== "End") {
        let [command, town, paramOne, paramTwo] = nextLine.split("=>"); //paramOne - citizen, paramTwo-gold
        paramOne = Number(paramOne);
        paramTwo = Number(paramTwo)

        if (command == 'Plunder') {
            obj[town].population -= paramOne;
            obj[town].gold -= paramTwo;
            console.log(`${town} plundered! ${paramTwo} gold stolen, ${paramOne} citizens killed.`);
            if (obj[town].population <= 0 || obj[town].gold <= 0) {
                delete obj[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else if (command == 'Prosper') {
            if (paramOne < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                obj[town].gold += paramOne
                console.log(`${paramOne} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);
            }
        }
        nextLine = input.shift();
    }

    let entries = Object.entries(obj);

    if (entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        for (const cityData of entries) {
            let name = cityData[0];
            let city = cityData[1];   
            console.log(`${name} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])
    pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
    

