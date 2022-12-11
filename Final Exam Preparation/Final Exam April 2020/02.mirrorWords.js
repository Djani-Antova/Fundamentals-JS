function mirrorWords(text) {

    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

    let validPairs = [];
    let mirrorWords = [];

    while ((validName = pattern.exec(text)) !== null) {
       
        validPairs.push(validName[2]);
       
        validPairs.push(validName[3]);
       
    }

    for (let i = 0; i < validPairs.length; i += 2) {
        let currentWord = validPairs[i];

        for (let j = 0; j < currentWord.length; j++) {

            let mirrorWord = "";
            for (let j = currentWord.length - 1; j >= 0; j--) {
                mirrorWord += currentWord[j];
            }

            if (mirrorWord == validPairs[i + 1]) {
                mirrorWords.push(`${validPairs[i]} <=> ${mirrorWord}`)

            }
            break
        }
    }

    let validPairsCount = validPairs.length / 2;
    let mirrorWordsCount = mirrorWords.length;


    if (validPairs.length === 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }
    if (mirrorWordsCount === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    }
}

 mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
//mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])