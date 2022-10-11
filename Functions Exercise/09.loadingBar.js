function loadingBar(number) {

    let arr = []
    let decimNumber = number / 10;
    let remainNumber = 10 - decimNumber;

    let char = '%';

    arr.push(char.repeat(decimNumber))

    let dots = '.';
    arr.push(dots.repeat(remainNumber))

    if (remainNumber > 0) {
        console.log(`${number}% [${arr.join('')}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`)
        console.log(`[%%%%%%%%%%]`);
    }
}
loadingBar(100)