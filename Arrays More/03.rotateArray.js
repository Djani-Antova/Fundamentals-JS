function rotateArray(array) {
   
    let l = array.length;
    let rotation = array.pop();     

    for (let index = 0; index < rotation; index++) {
        let last = array.pop();
        array.unshift(last);       
    }
    console.log(array.join(' '));       
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
