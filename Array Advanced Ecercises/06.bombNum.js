function bombNumbers(numbers, bomb) {

    let numberToRemove = bomb[0];
    let power = bomb[1];
  
    while (numbers.includes(numberToRemove)) {
      let bombIndex = numbers.indexOf(numberToRemove);
      let startIndex = bombIndex - power;
      let elementsToRemove = power * 2 + 1;
  
      if (startIndex < 0) {
        elementsToRemove += startIndex;
        startIndex = 0;
      }
  
      numbers.splice(startIndex, elementsToRemove);
    }
  
    let sum = 0;
  
    for (let num of numbers) {
      sum += num;
    }
  
    console.log(sum);
  }
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2])