
function wordOccurance(wordsInput) {

  let words = {};

  for (const word of wordsInput) {
    if (!words[word]) {
      words[word] = 0;
    } 
      words[word]++
    
  }
 
  let sortedWords = Object.entries(words).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

  for (const [key, value] of sortedWords) {
    console.log(`${key} -> ${value} times`);
  }

}
wordOccurance(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
  "sentence", "And", "finally", "the", "third", "sentence"])
