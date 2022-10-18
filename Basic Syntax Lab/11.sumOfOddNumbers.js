function solve(num) {

    let numberPrints = 0;
    let a = 1;
    let sum = 0;

    while (numberPrints < num) {
        console.log(a);
        sum += a;
        a += 2;
        numberPrints += 1;
    }
    console.log(`Sum: ${sum}`);

} solve(3) /// 1,3,5,7,9
