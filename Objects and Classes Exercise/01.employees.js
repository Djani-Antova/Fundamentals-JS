function employees(array) {

    let list = {};

    for (let line of array) {
        list.name = line;
        list.number = line.length

        console.log(`Name: ${list.name} -- Personal Number: ${list.number}`)
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])