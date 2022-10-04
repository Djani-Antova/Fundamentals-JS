function reverseString(input) {
    let res = "";

    for (let i = input.length - 1; i >= 0; i--) {
      res += input[i];       
    }
    console.log(res);
    
}
reverseString('Hello') 