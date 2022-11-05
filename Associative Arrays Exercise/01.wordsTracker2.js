function wordsTracker(wordsArray) {

    const words = wordsArray.shift().split(' ');

    let result = {};

    for (const word of words) {
        result[word] = 0;
    }
    for (const word of wordsArray) {
        if(result.hasOwnProperty(word)) {
            result[word] ++;
        }        
    }
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
  for (const entry of sorted) {
      console.log(`${entry[0]} - ${entry[1]}`);
  }

}

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)