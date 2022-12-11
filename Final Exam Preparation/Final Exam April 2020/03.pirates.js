function pirates(input) { //not finished!!
    let obj = {};

    let currentLine = input.shift();

    while (currentLine !== "Sail") {
        let [town, population, gold] = currentLine.split("||");
        population = Number(population);
        gold = Number(gold)

        if (!obj[town]) {
            obj[town] = { population, gold };
        } else {
            obj[town].population += population;
            obj[town].gold += gold;
        }

        currentLine = input.shift();

    }
    console.table(obj);
    let nextLine = input.shift();
    while (nextLine !== "End") {
        let [command, town, arrgumOne, arrgumTwo] = nextLine.split("=>");
        arrgumOne = Number(arrgumOne);
        arrgumTwo = Number(arrgumTwo)

        if (command === 'Plunder') {
            if(obj.population > arrgumOne && obj.gold > arrgumTwo)
            
            console.log(`${town} plundered! ${arrgumTwo} gold stolen, ${arrgumOne} citizens killed.`);
            else {
                delete obj.town
                console.log(`${town} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            if(arrgumOne < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                obj.gold += arrgumOne
                console.log(`${arrgumOne} gold added to the city treasury. ${town} now has ${obj.gold} gold."`);
            }
         }
        nextLine = input.shift();
        if(nextLine == "End") {
           //to do
        }
        console.table(obj);
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

