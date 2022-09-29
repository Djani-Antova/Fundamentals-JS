function vacation(num, type, day) {
    let price = 0;

    switch (day) {
        case "Friday":
            if (type === "Students") {
                price = 8.45;
            } else if (type === "Business") {
                price = 10.9
            } else if (type === "Regular") {
                price = 15;
            } break;

        case "Saturday":
            if (type === "Students") {
                price = 9.80;
            } else if (type === "Business") {
                price = 15.60;
            } else if (type === "Regular") {
                price = 20;
            } break;

        case "Sunday":
            if (type === "Students") {
                price = 10.46;
            } else if (type === "Business") {
                price = 16;
            } else if (type === "Regular") {
                price = 22.5;
            } break;
    }
    let totalPrice = num * price;
    if (type === "Students" && num >= 30) {
        totalPrice *= 0.85;
    }
    if (type === "Business" && num >= 100) {
        totalPrice = (num - 10) * price;
    }
    if (type === "Regular" && num >= 10 && num <= 20) {
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
} vacation(40,
    "Regular",
    "Saturday"
)