function modernTimesOfHashTag(string) {

    let stringArr = string.split(" ");   
    let specialWords = [];

    for (const element of stringArr) {
        if(element[0] === "#" && element.length >= 2) {
            specialWords.push(element)
        }
    }  
  
    for (const word of specialWords) {
        let currentWordWithoutHash = word.substring(1);        

        function onlyLetters(currentWordWithoutHash) {
            return /^[a-zA-Z]+$/.test(currentWordWithoutHash);
          }
          
          if(onlyLetters(currentWordWithoutHash)) {
            console.log(currentWordWithoutHash)
          }            
    }   
}

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')