function login(input) {

    let userName = input[0];

    let l = input[0].length;
    let password = '';
    let count = 0;

    for (let i = l - 1; i >= 0; i--) {
        let char = userName[i];
        password += char;
    }

    for (let i = 1; i <= input.length - 1; i++) {
        if (input[i] === password) {
            console.log(`User ${userName} logged in.`);
        }else {
            count++;
            if (count === 4){
                console.log(`User ${userName} blocked!`)
                break;
            } else {
                console.log(`Incorrect password. Try again.`);  
            }        
        }                               
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])
console.log(`-------------------`)
login(['sunny','rainy','cloudy','sunny','not sunny']);