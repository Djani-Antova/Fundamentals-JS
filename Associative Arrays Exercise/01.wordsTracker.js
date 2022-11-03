function wordsTracker(input) {

   let result = {};   

   let checkLine = input.shift()
   let wordsToTrack = checkLine.split(" ");

   let wordsToCheck = input;

   wordsToTrack.forEach((wordToTrack) => {
      result[wordToTrack] = 0;
    });

   for (let wordToTrack of wordsToTrack) {   
      for (let wordToCheck of wordsToCheck) {
         if (wordToTrack === wordToCheck) {
            result[wordToTrack] += 1;
         }
      }
   }
   let entries = Object.entries(result);
   let sortedEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

   for (let [key, value] of sortedEntries) {
      console.log(`${key} - ${value}`);
   }
}

wordsTracker([
   'is the',
   'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)