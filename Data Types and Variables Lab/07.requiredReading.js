function requiredReading(allPages, pagesInHour, daysMustRead) {

    let totalTimeNeeded = allPages / pagesInHour;
    let hoursPerDay = totalTimeNeeded / daysMustRead;

    console.log(hoursPerDay);    
}
requiredReading(432, 15 , 4)