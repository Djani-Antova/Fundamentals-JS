function scheduleMeetings(input) {

    let meetings = {};

    for (const line of input) {
        let [day, name] = line.split(" ");
        if (meetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name                   
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let [day, name] of Object.entries(meetings)) {
        console.log(`${day} -> ${name}`);
    }
  
}
scheduleMeetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])