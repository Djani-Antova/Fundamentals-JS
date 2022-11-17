function furniture(input) {

    let pattern = />>(?<furniture>[A-z][A-z]+)<<(?<price>\d+[.]?\d+)!(?<quantity>\d+)/gm;

    let match = pattern.exec(input);
    let totalSum = 0
    let furnitureBougth = []
    while (match !== null) {

        let furniture = match.groups['furniture'];
        let price = Number(match.groups['price']);
        let quantity = Number(match.groups['quantity']);

        furnitureBougth.push(furniture);
        totalSum += (price * quantity);

        match = pattern.exec(input);
    }

    console.log('Bought furniture:');

    furnitureBougth.forEach(el => console.log(el));

    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
// furniture(['>>Laptop<<312.2323!3',
//     '>>TV<<300.21314!5',
//     '>Invalid<<!5',
//     '>>TV<<300.21314!20',
//     '>>Invalid<!5',
//     '>>TV<<30.21314!5',
//     '>>Invalid<<!!5',
//     'Purchase'])