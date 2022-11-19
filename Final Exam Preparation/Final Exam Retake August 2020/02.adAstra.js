function adAstra(input) {

    let text = input[0];
    let caloriesPerDay = 2000;
    let pattern = /(\||#)(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    // = /([|#])(?<item>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let match = pattern.exec(text);
    let totalCalories = 0

    let foodInfo = [];

    while (match !== null) {
        let itemName = match.groups.item
        let expiryDate = match.groups.date
        let calories = Number(match.groups.calories);       

        foodInfo.push({
            itemName,
            expiryDate,
            calories
        })

        totalCalories += calories

        match = pattern.exec(text);
    }
    
    let days = Math.floor(totalCalories / caloriesPerDay);
    console.log(`You have food to last you for: ${days} days!`);

    if (foodInfo.length === 0) return;
  
    foodInfo.forEach(obj => {
      console.log(`Item: ${obj.itemName}, Best before: ${obj.expiryDate}, Nutrition: ${obj.calories}`);
    });

}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('=============================');
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('=============================');
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])