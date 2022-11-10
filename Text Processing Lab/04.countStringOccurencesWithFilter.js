function countStrinOccurences(text, word) {
   

    let count = text.split(" ")
        .filter(w => w === word).length;

        console.log(count);

}
countStrinOccurences('This is a word and it also is a sentence',
    'is')