function secretChat(input) {

    let message = input.shift();

    while (input[0] !== 'Reveal') {
        let tokens = input.shift().split(':|:');
        let command = tokens[0];
        let firstParam = tokens[1];
        let secondParam = tokens[2];

        if (command == 'InsertSpace') {
            let index = Number(firstParam);
            message = message.slice(0, index) + ' ' + message.slice(index);
            console.log(message);

        } else if (command == 'Reverse') {
            if (message.includes(firstParam)) {
                let len = firstParam.length;
                let indexFirstParam = message.indexOf(firstParam)
                let firstSection = message.substring(0, indexFirstParam);
                let slicedSection = message.substring(indexFirstParam, indexFirstParam + len).split('').reverse().join('');
                let secondSection = message.substring(indexFirstParam + len);
                message = firstSection + secondSection + slicedSection 
                console.log(message);
            } else {
                console.log("error");
            }

        } else if (command == 'ChangeAll') {
            while (message.includes(firstParam)) {
                message = message.replace(firstParam, secondParam)
            }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);

}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])
console.log('====');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])