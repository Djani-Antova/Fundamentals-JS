function schoolGrades(input) {

    let list = {};

    for (const line of input) {
        let tokens = line.split(" ")
        let name = tokens.shift();
        let setOfGrades = tokens.map(Number)

        if (!list[name]) {
            list[name] = setOfGrades;
        }
        else {
            list[name] = (list[name]).concat(setOfGrades);
        }

    }

    let keys = Object.keys(list);
    let sortedKeys = keys.sort((a, b) => a.localeCompare(b));   

    for (let key of sortedKeys) {
        let sum = 0;
        for (let el of list[key]) {
            sum += el;
        }
        let avg = sum / ((list[key]).length)
        console.log(`${key}: ${avg.toFixed(2)}`);
    }
}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])