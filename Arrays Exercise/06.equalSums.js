function equalSums(array) {

    let foundIndex = 'no';

    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
       
        let sumLeft = 0
        let sumRight = 0;

        let num = array[i];

        for (let k = 0; k < i; k++) {
            sumLeft += array[k];            
        }
        for (let j = i + 1; j < arrayL; j++) {
            sumRight += array[j];            
        }
        if (sumLeft == sumRight) {
            foundIndex = i;
        }         
    }
    console.log(foundIndex);
    
}

//equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSums([1, 2, 3])
//equalSums([1])
//equalSums([1, 2, 3, 3])