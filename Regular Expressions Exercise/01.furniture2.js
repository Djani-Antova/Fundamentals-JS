function furniture(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/; 
    let furniture = [];
    let total = 0;

    while (input[0] !== 'Purchase') {

        let line = input.shift()
        match = pattern.exec(line);

        if (match !== null) {
        
            let { name, price, quantity } = match.groups;
            price = Number(price);
            quantity = Number(quantity);
            total += price * quantity;
            furniture.push(name);
        }
    }

    console.log('Bought furniture:');
   for (const item of furniture) {
    console.log(item);
   }

    console.log(`Total money spend: ${total.toFixed(2)}`);
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