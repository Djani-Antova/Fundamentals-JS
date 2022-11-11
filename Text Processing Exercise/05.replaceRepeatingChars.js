function replacingChars(string) {

    let newString = []

    for (let i = 0; i < string.length; i++) {    
      
        if(string[i] !== string[i + 1]) {
            newString.push(string[i])
        }
    }
    console.log(newString.join(""));
}
replacingChars('qqqwerqwecccwd')