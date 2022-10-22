function houseParty(input) {

    let resultList = [];

    for (const el of input) {
        let line = el.split(' ');
        let name = line[0]
        if (!line.includes('not')) {
            if (!resultList.includes(name)) {
                resultList.push(name)
            } else {
                console.log(`${name} is already in the list!`);
            } 
        
       } if(line.includes('not')) {
            if(resultList.includes(name)) {
                let indexOfName = resultList.indexOf(name);
                resultList.splice(indexOfName, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
console.log(resultList.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)