function arrayManipulator(arr, arrStr) {
    let line = arrStr.shift();
 
    while (line !== 'print') {
        let command = line.split(' ')[0];
        let arrNums;
        if (command !== 'sumPairs') {
            arrNums = line.split(`${command} `)[1].split(' ');
        }
 
        if (command === 'add') {
            let index = Number(arrNums[0]);
            let element = Number(arrNums[1]);
            arr.splice(index, 0, element)
        } else if (command === 'addMany') {
            let index = Number(arrNums.shift());
            let element = arrNums.map(Number);
            for (let i = 0; i < element.length; i++) {
                arr.splice(index + i, 0, element[i])
            }
        } else if (command === 'contains') {
            let searchEl = Number(arrNums[0])
            if (arr.includes(searchEl)) {
                let index = arr.indexOf(searchEl);
                console.log(index)
            } else {
                console.log(`-1`);
            }
        } else if (command === 'remove') {
            let index = Number(arrNums[0]);
            arr.splice(index, 1);
        } else if (command === 'shift') {
            let rotation = Number(arrNums[0]);
            for (let i = 0; i < rotation; i++) {
                let remove = arr.shift();
                arr.push(remove);
            }
        } else if (command === 'sumPairs') {
            let length = arr.length;
            let resultArr = []
            for (let i = 0; i < length; i += 2) {
                let currentNum = Number(arr[i]) + Number(arr[i + 1]);
                if (isNaN(arr[i + 1])) {
                    resultArr.push(arr[length - 1]);
                } else {
                    resultArr.push(currentNum);
                }
            }
            arr = resultArr;
        }
        line = arrStr.shift();
    }
    console.log(`[ ${arr.join(', ')} ]`);
}
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])