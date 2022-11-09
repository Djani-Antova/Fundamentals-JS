
function oddOccurences(words) {

  let resultObject = {}

  let allWords = words
    .split(" ")
    .map(w => w.toLowerCase())

  for (let word of allWords) {
    if (!resultObject[word]) {
      resultObject[word] = 1
    } else {
      resultObject[word]++
    }
    
  }

  let result = ''
  for (const word of allWords) {
    if (resultObject[word] % 2 === 1) {
      result += `${word} `
      delete resultObject[word]
    }
  }
  console.log(result);

}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
//oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')
