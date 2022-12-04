function angryCat(array, number, type) {    

/* o	"{position} - {sum of price ratings}"
o	    Positions can be "Right" or "Left"
 */
let items = array; 
let entryPoint = number;
let typeOfItem = type;

let sumOnLeft = 0;
let sumOnRight = 0;

if(type == "cheap") {
    for (let index = 0; index < entryPoint; index++) {
       if(items[index] < items[entryPoint]) {
        sumOnLeft += items[index]
       }
    }
    for (let i = entryPoint + 1; i < items.length; i++) {
        if(items[i] < items[entryPoint]) {
            sumOnRight += items[i]
        }        
    }
}
if (type == "expensive") {
    for (let j = 0; j < entryPoint; j++) {
        if(items[j] >= items[entryPoint]) {
            sumOnLeft += items[j]
           }
        
    }
    for (let k = entryPoint + 1; k < items.length; k++) {
        if (items[k] >= items[entryPoint]) {
            sumOnRight += items[k]
        }
        
    }
}

if (sumOnLeft >= sumOnRight) {
    console.log(`Left - ${sumOnLeft}`);
} else {
    console.log(`Right ${sumOnRight}`);
}

    
}
angryCat([1, 5, 1], 1, "cheap")
console.log("==============");
angryCat([5, 10, 12, 5, 4, 20], 3, "cheap")
console.log("==============");
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
        
    