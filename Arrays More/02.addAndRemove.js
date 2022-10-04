function addAndRemove(commands) {
    let number = 0;
    let myArray = [];

    for (let command of commands) {
        number++;
        if (command === 'add') {
            myArray.push(number);
        } else if (command === 'remove') {
            myArray.pop(number);
        }
    }

    console.log(myArray.length > 0 ? myArray.join(' ') : 'Empty');
}
addAndRemove(['add', 'add', 'remove','add', 'add'])