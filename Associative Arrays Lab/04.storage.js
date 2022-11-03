function storage(input) {

    let result = {};

    for (const line of input) {
        let [item, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (result[item]) {
            result[item] += quantity
        } else {
            result[item] = quantity
        }

    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])