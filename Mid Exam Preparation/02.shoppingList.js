function shoppingList(array) {

    let initialList = array.shift().split('!')
    
    for (let line of array) {
        if (line !== "Go Shopping!") {
            let commandInfo = line.split(' ');
            let command = commandInfo[0];
            let item = commandInfo[1];

            switch (command) {
                case "Urgent":
                    if(!initialList.includes(item)) {
                        initialList.unshift(item)
                    }
                    
                    break;

                case "Unnecessary":
                    if(initialList.includes(item)) {
                        let index = initialList.indexOf(item)
                        initialList.splice(index, 1)
                    }

                    break;
                case "Correct":                    
                    let oldItem = commandInfo[1];
                    let newItem = commandInfo[2];
                    if(initialList.includes(oldItem)) {
                        let index = initialList.indexOf(oldItem)
                        initialList.splice(index, 1, newItem)
                    }


                    break;
                case "Rearrange":
                    if(initialList.includes(item)) {
                        let index = initialList.indexOf(item)
                        initialList.splice(index, 1);
                        initialList.push(item)
                    }
                    break;
            }
        }
    }
    console.log(initialList.join(', '));

}
// shoppingList(["Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]);
    shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
    