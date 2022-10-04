function interegAndFloat(firsNum, secondNum, thirdNum) {
    let sum = firsNum + secondNum + thirdNum;
   
    //let res =  (sum % 1 === 0? "Integer" : "Float") another option
    // if sum === parseInt(sum)  another option


    let isFloat = false;
    let sumToString = String(sum);
    for (let index = 0; index < sum.length; index++) {
        if(sum[i] === '.') {
            isFloat = true;
        }         
    }
    console.log(`${sum} - ${isFloat ? "Float" : "Integer" }`);

    
}
interegAndFloat(9, 100, 1.1)