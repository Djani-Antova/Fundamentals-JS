function travelTime(arr) {
    let result = {};

    for (let element of arr) {
        let [country, town, cost] = element.split(' > ');
        cost = Number(cost);        
        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }
       
        if (!result[country].hasOwnProperty(town)) {
            result[country][town] = cost;
        } else {            
            if (result[country][town] > cost) {
                result[country][town] = cost;
            }
        }
    }

    let sortedCountries = Object.entries(result).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    for (let [country, towns] of sortedCountries) {
        let result = ``;
        let output = Object.entries(towns).sort((kvpA, kvpB) => kvpA[1] - kvpB[1]);
        for (const [town, cost] of output) {
            result += `${town} -> ${cost} `
        }
        console.log(country + ' -> ' + result);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])