function messagesManager(input){

    let capacity = Number(input.shift())
    let allMessages = {};
   
    while (input[0] !== 'Statistics') {
        let tokens = input.shift().split('=');
        let command = tokens[0]

        if (command === "Add"){
            let username = tokens[1];
            let sent = Number(tokens[2]);
            let received = Number(tokens[3]);

            if (!allMessages.hasOwnProperty(username)){
                allMessages[username] = [] 
                allMessages[username].push(sent)
                allMessages[username].push(received)
            } 

        } else if (command === "Message"){
            let sender = tokens[1];
            let receiver = tokens[2];

            if (allMessages.hasOwnProperty(sender) && allMessages.hasOwnProperty(receiver)){                
                allMessages[sender][0] += 1;
                allMessages[receiver][1] += 1;

                let totalSenderMessages = allMessages[sender][0] + allMessages[sender][1];
                let totalReceiverMessages = allMessages[receiver][0] + allMessages[receiver][1];;

                if (totalSenderMessages >= capacity){
                    console.log(`${sender} reached the capacity!`)
                    delete allMessages[sender];
                }
                if (totalReceiverMessages >= capacity){
                    console.log(`${receiver} reached the capacity!`)
                    delete allMessages[receiver];
                }
            }

        } else if (command === "Empty"){
            let userToDelete = tokens[1];

            if (allMessages.hasOwnProperty(userToDelete)){
                delete allMessages[userToDelete]
            } else if (userToDelete === 'All'){
                allMessages = {};
            }
        }
    }
  
    let entries = Object.entries(allMessages);
    console.log(`Users count: ${entries.length}`);

    for (let [key, value] of entries){
        console.log(`${key} - ${(value[0]) + (value[1])}`);
    } 
  
}

messagesManager([
"10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"]);
console.log('=====');

messagesManager(([
"20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"]));
console.log('=====');

messagesManager(([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"]));