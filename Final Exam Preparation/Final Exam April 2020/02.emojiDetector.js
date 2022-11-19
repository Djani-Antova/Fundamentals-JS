function emojiDetector(input) {

    let string = input[0];

    let emojiPattern = /(::|\*\*)(?<name>([A-Z][a-z]{2,}))\1/gm;
    let digitPatern = /\d/g;

    let matchesOfDigits = string.match(digitPatern);
  
    let sum = 1;
    for (let i = 0; i < matchesOfDigits.length; i++) {
        sum = sum * matchesOfDigits[i];
    }
    console.log(`Cool threshold: ${sum}`);
    count = 0;
    let result = []

    let match = emojiPattern.exec(string);

    while (match !== null) {

        let emoji = match.groups['name'];
        count++;

        let emojiSum = 0;
        for (let i = 0; i < emoji.length; i++) {
            let element = emoji[i];

            let value = element.charCodeAt();
            emojiSum += value;
        }
        if (emojiSum >= sum) {
            result.push(match[0])
        }

        match = emojiPattern.exec(string);
    }

    console.log(`${count} emojis found in the text. The cool ones are: `);
    result.forEach(el => console.log(el));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])