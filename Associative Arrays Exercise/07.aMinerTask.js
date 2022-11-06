function aMinerTask(array) {

    let result = {};

    for (let index = 0; index < array.length; index += 2) {
        let resource = array[index];
        let quantity = Number(array[index + 1]);

        if (!result.hasOwnProperty(resource)) {
            result[resource] = quantity
        } else {
            result[resource] += quantity
        }
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }

}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)