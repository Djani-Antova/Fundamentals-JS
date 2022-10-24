function cityParser(cityInfo) {
    for (let key of Object.keys(cityInfo)) {
       console.log(`${key} -> ${cityInfo[key]}`);

    }

    
    
}

cityParser ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})
