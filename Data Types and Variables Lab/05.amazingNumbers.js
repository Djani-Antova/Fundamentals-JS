function amazingNumbers(num) {
    let sum = 0;

    let numToString = String(num);

    for (let index = 0; index < numToString.length; index++) {
        let char = numToString[index];
        char = Number(char);
        sum += char;
    }

    let sumToString = String(sum);
    let res;

    for (let index = 0; index < sumToString.length; index++) {
        let element = sumToString[index];
        res = element == 9 ? "True" : "False";       
    }
    console.log(`${num} Amazing? ${res} `);
}
amazingNumbers(1233)