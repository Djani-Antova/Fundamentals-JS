function blackFlag(array) {
    let arrayInNumber = array.map(Number);

    let days = arrayInNumber[0];
    let plunderADay = arrayInNumber[1];
    let expectedPlunder = arrayInNumber[2]
    let sum = 0;

    for (let i = 1; i <= days; i++) {
        let currentPlunder = 0;

        if (i % 3 === 0) {
            currentPlunder = plunderADay * 1.5;
        } else {
            currentPlunder = plunderADay
        }
        sum += currentPlunder;

        if (i % 5 === 0) {
            sum *= 0.7;
        }
    }
    if (sum >= expectedPlunder) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        let percentage = sum * 100 / expectedPlunder;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
    "20",
    "380"])

