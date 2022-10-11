function factorialDivision(numberOne, numberTwo) {

    function factorial(n) {
        if (n < 0) return;
        if (n < 2) return 1;
        return n * factorial(n - 1);
    }

    let factorialOfnumberOne = factorial(numberOne);
    let factorialOfNumberTwo = factorial(numberTwo)

    let res = factorialOfnumberOne / factorialOfNumberTwo;
    console.log(res.toFixed(2));
}
factorialDivision(6, 2)