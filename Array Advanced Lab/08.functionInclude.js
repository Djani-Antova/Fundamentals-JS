
let myArr = [1, 20, 30, 40, 50];

console.log(myIncludes(myArr, 20));
console.log(myIncludes(myArr, -20));

function myIncludes(arr, value) {

    for (let el of arr) {
        if (el === value) {
            return true;
        }
    }
    return false;
}

console.log(myIndexOf(myArr, 50));
console.log(myIndexOf(myArr, 60));

function myIndexOf(arr, value) {

    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === value) {
            return i;
        }
    } 
    return -1;
}