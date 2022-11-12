function modernTimes(string) {
 
    const words = string.split(' ');
 
    words.forEach(word => {
        const isValidWord = word.startsWith('#') || word.length > 1;
        if (isValidWord) {
 
            let isLetter = true;
            let wordCopy = '';
 
            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 && char.charCodeAt() > 122) {
                    isLetter = false;
                    break;
                } else {
                    wordCopy += word[index];
                }
 
            }
            if (isLetter) {
                console.log(wordCopy);
            }
        }
    });
 
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')