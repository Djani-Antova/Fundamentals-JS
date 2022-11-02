function addressBook(input) {

    let result = {}

    for (const line of input) {
        let [name, address] = line.split(":");
        result[name] = address;
    }
    let keys = Object.keys(result)
    let sortedkeys = keys.sort((a, b) => a.localeCompare(b));
    for (const key of sortedkeys) {
        console.log(`${key} -> ${result[key]}`);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])