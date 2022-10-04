function calculator(a, operator, b) {

    let res;

    switch (operator) {
        case '+':
            res = a + b;
            break;

        case '-':
            res = a - b
            break;
        case '/':
            res = a / b
            break;
        case '*':
            res = a * b
            break;
    }
    console.log(res.toFixed(2));
}
calculator(25.5, '-', 3)