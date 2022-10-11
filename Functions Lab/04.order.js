function order (item, count) {
    let total;
    let price;
  
    switch (item) {
      case "coffee":
        price = 1.5;
        break;
      case "water":
        price = 1.0;
        break;
      case "coke":
        price = 1.4;
        break;
      case "snacks":
        price = 2.0;
        break;
      default:
        console.log(`Invalid order`);
        return;
    }
  
    total = count * price;
    console.log(total.toFixed(2));
  }
  
order("water", 5)