function distinctArr(arr) {

    let resultArray = [];

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if(!resultArray.includes(element)) {
            resultArray.push(element)
        }        
    }
    console.log(resultArray.join(" "));

} 
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2])