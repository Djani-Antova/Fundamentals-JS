function solve(day, age) {
    let price;
    if (age >= 0 && age <= 122) {
        switch (day) {
            case "Weekday":
                if (age <= 18 || age > 64) {
                    price = 12;
                } else if (age > 18 && age <= 64) {
                    price = 18;
                }
                break;
            case "Weekend":
                if (age <= 18 || age > 64) {
                    price = 15;
                } else if (age > 18 && age <= 64) {
                    price = 20;
                }
                break;
            case "Holiday":
                if (age <= 18) {
                    price = 5;
                } else if (age > 18 && age <= 64) {
                    price = 12;
                } else if (age > 64) {
                    price = 10;
                }
                break;
        }
        console.log(`${price}$`);

    } else {
        console.log("Error!");
    }
}
solve('Weekday', 
42)