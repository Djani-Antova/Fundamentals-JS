function secretChar(array) {
    let message = array.shift();
 
    let line = array.shift();
    while (line !== 'Reveal') {
        if (line.includes('InsertSpace')) {
            let [command, index] = line.split(':|:');
            index = Number(index);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index,)
            message = firstPart + ' ' + secondPart;
            console.log(message)
        } else if (line.includes('Reverse')) {
            let [command, substring] = line.split(':|:');
            if (message.includes(substring)) {
                let substringLength = substring.length;
                let index = message.indexOf(substring);
 
                let cutMsg = message.substring(index, index + substringLength).split('').reverse().join('');
                let firstPart = message.substring(0, index)
                let secondPart = message.substring(index + substringLength);
                message = firstPart + secondPart + cutMsg;
                console.log(message)
 
            } else {
                console.log('error')
            }
        } else if (line.includes('ChangeAll')) {
            let [command, substring, replacement] = line.split(':|:');
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message)
        }
        line = array.shift();
    }
    console.log(`You have a new text message: ${message}`);
}