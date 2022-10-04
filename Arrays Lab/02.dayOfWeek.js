function dayOfWeek(n) {

    if(n < 1 || n > 7) {
        console.log(`Invalid day!`);
    } else {
        
    let dayNameArr = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday']

        console.log(dayNameArr[n - 1]);
    }   
    
}
dayOfWeek(4)