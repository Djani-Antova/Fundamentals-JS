function storeProvision(currentStock, orderedStock) {

    let result = {}

    for (let i = 0; i < currentStock.length; i += 2) {
        let availableItem = currentStock[i];
        let availableQuantity = Number(currentStock[i + 1]);
        result[availableItem] = availableQuantity;
    }

    for (let j = 0; j < orderedStock.length; j += 2) {
        let orderedItem = orderedStock[j];
        let orderedQuantity = Number(orderedStock[j + 1]);
        if (result.hasOwnProperty(orderedItem)) {
            result[orderedItem] += orderedQuantity
        } else {
            result[orderedItem] = orderedQuantity;
        }

    }
    for (let product in result) {
        console.log(`${product} -> ${result[product]}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
// storeProvision
//     ([
//         'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
//     ],
//         [
//             'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//         ]
//     )