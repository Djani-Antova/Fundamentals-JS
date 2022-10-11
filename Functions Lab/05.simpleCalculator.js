function simpleCalculator (x, y, op) {
    let res;

    switch (op) {
        case 'multiply': res = x * y; break;    
        case 'divide': res = x / y; break;
        case 'add': res = x + y; break;
        case 'subtract': res = x - y; break;
    }
console.log(res);
   
} 
simpleCalculator(5, 5, 'multiply' )