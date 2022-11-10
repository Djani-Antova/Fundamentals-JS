function revealWords(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text. split(" ") 

    for (const word of wordsArr) {

        for (const element of textArr) {  
            if(element.length === word.length && element.includes('*')) {
               let indexOfElement = textArr.indexOf(element);
               textArr.splice(indexOfElement, 1, word)
            }
        }
    }
    console.log(textArr.join(" "));    
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')