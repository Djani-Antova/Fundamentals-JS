function endSum(numbers) {
    let firstElement = Number(numbers[0]);
    // let firstElement = numbers.shift();
    let lastElement = Number(numbers.pop());

    let sum = firstElement + lastElement;

    console.log(sum);
}

endSum(['20', '30', '40']);
endSum(['20']);

