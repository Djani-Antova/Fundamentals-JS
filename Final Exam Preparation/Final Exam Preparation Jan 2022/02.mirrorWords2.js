function mirrorWords(input) {

    let text = input[0];

    let pattern = /([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);
    let result = [];
    let counter = 0;

    //for every match

    while (match !== null) {
        counter++;
        // console.log(match);                 // match =  ['#poOl##loOp#', '#', 'poOl', 'loOp', index: 11, input: '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$lo…@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r', groups: {…}]
        let word1 = match[2];
        let word2 = match[3]
        let reversed = word2.split('').reverse().join('')

        if (word1 == reversed) {
            result.push(`${word1} <=> ${word2}`)
        }
        match = pattern.exec(text);
    }

    if (counter == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${counter} word pairs found!`);
    }

    if(result.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(result.join(', '));
    }

}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
//mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])