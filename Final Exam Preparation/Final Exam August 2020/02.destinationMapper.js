function destinationMapper(text) {

    let pattern = /([=/])(?<location>[A-Z][A-Za-z]{2,})\1/g;

    let validNames = [];
    let travelPoins = 0;
  
    while ((validName = pattern.exec(text))  !== null) {
        let name = validName[0].substring(1, validName[0].length - 1)
        validNames.push(name);
        travelPoins += name.length

    }
    console.log(`Destinations: ${validNames.join(', ')}`);
    console.log(`Travel Points: ${travelPoins}`);    
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
console.log('==================');
destinationMapper("ThisIs some InvalidInput")