function countStrinOccurences(text, word) {

    let textArr = text.split(" ");
    let sum = 0;
    
    textArr.forEach(element => {
        if(element === word) {
            sum++
        }
    });
    console.log(sum);    
}
countStrinOccurences('This is a word and it also is a sentence',
'is')