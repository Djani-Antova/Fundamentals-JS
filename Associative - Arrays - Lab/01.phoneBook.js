function phoneBook(input) {
   
    let list = {};

    for (const line of input) {
        let [name, number] = line.split(" ");
        list[name] = number;        
    }
    for (const person in list) {
        console.log(`${person} -> ${list[person]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])