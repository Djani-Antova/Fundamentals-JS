function oddOccurences(words) {

    let resultObject = {};

    let allWords = words.split(" ")
    allWords.forEach(word => {
        word = word.toLowerCase();
        if (!resultObject.hasOwnProperty(word)) {
            resultObject[word] = 1;
        } else {
            resultObject[word]++;
        }
    });

    let filtered = Object.entries(resultObject).filter(([key, value]) => {
        return value % 2 !== 0
    })

    let sorted = filtered.sort((a, b) => b[1] - a[1]);
    let result = "";

    for (const el of sorted) {
        result += `${el[0]} `
    }
    console.log(result);
}
//oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')