function angryCat(array, number, type) {    

    let breakPoint = number;       
    let sumOnLeft = 0;
    let sumOnRight = 0;

    let firstArray = array.slice(0, breakPoint);
    let secondArray = array.slice(breakPoint + 1);
    
    if(type == "cheap") {
        for (let index = 0; index < firstArray.length; index++) {  
           if(firstArray[index] < array[breakPoint]) {
            sumOnLeft += firstArray[index]
           }
        }
        for (let i = 0; i < secondArray.length; i++) {
            if(secondArray[i] < array[breakPoint]) {
                sumOnRight += secondArray[i]
            }        
        }
    }

    if (type == "expensive") {
        for (let j = 0; j < firstArray.length; j++) {
            if(firstArray[j] >= array[breakPoint]) {
                sumOnLeft += firstArray[j]
               }            
        }
        for (let k = 0; k < secondArray.length; k++) {
            if (secondArray[k] >= array[breakPoint]) {
                sumOnRight += secondArray[k]
            }            
        }
    }
    
    if (sumOnLeft >= sumOnRight) {
        console.log(`Left - ${sumOnLeft}`);
    } else {
        console.log(`Right - ${sumOnRight}`);
    }    
        
    }
    // angryCat([1, 5, 1], 1, "cheap")
    // console.log("==============");
    // angryCat([5, 10, 12, 5, 4, 20], 3, "cheap")
    // console.log("==============");
    angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
            
        