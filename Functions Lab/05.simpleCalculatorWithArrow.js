function simpleCalculator (numOne, numTwo, op) {
    let res;

//      1st option     
// let multiply = (x, y) => x * y;
//     // let divide = (x, y) => x / y;
//     // let add = (x, y) => x + y;
//     // let subtract = (x, y) => x - y; 

//     switch (op) {
//         case 'multiply': res = multiply (numOne, numTwo); break;   
//         case 'divide': res = divide(umOne, numTwo); break;
//         case 'add': res = add(numOne, numTwo); break;
//         case 'subtract': res = subtract(numOne, numTwo); break;
//     }

//    console.log(res);

// 2nd option

switch (op) {
            case 'multiply': res = (numOne, numTwo) => numOne * numTwo; break;   
            case 'divide': res = (numOne, numTwo) => numOne / numTwo; break;   
            case 'add': res = (numOne, numTwo) => numOne + numTwo; break;   
            case 'subtract': res = (numOne, numTwo) => numOne - numTwo; break;    
        }
       console.log(res(numOne, numTwo));
} 
simpleCalculator(5, 5, 'multiply' )

