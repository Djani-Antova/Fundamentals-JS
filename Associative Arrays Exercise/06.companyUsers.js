function companyUsers(input) {

    let result = {}

    for (const line of input) {
        let [companyName, employeeId] = line.split(" -> ")

        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(employeeId);
    }

    let entries = Object.entries(result)
    let sortedEntries = entries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    sortedEntries.forEach(el => {
        const companyName = el[0];
        const allIDs = el[1]

        console.log(companyName);
        let uniqueIDs = new Set(allIDs);
        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])