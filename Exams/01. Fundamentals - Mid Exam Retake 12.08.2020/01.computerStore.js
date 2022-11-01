function computerStore(data) {
    let index = 0;
    let command = data[index];
    index++;
    let price = 0;

    while (command !== "regular") {
        if (command === "special") {
            break;
        }

        let partPrice = Number(command);
        if (partPrice < 0) {
            console.log(`Invalid price!`);
            command = data[index];
            index++;
            continue;
        }
        price += partPrice;
        command = data[index];
        index++
    }
    let taxes = price * 1.2 - price;
    let totalPrice = price + taxes;

    if (command === "special") {
        totalPrice *= 0.9;
    }
    if (totalPrice == 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!\n` +
        `Price without taxes: ${price.toFixed(2)}$\n` +
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` +
        `Total price: ${totalPrice.toFixed(2)}$\n`
        );
    }
}
computerStore((['1050', '200', '450', '2', '18.50', '16.86', 'special']))
// computerStore(['regular'])