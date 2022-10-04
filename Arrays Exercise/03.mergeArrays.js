function mergeArrays(array1, array2) {

    let newArray = [];

    for (let i = 0; i < array1.length; i++) {

        if (i % 2 === 0) {
            let currentEl = Number(array1[i]) + Number(array2[i]);
            newArray.push(currentEl);
        } else {
            currentEl = '' + array1[i] + array2[i];
            newArray.push(currentEl);
        }
    }
    console.log(newArray.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)