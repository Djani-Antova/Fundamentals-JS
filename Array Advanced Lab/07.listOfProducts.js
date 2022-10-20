function listOfProducts(products) {

    let sortedProducts = products.sort()

    for (let i = 0; i < sortedProducts.length; i++) {
        let element = sortedProducts[i];
        let buff = i + 1;
       item = buff+"." + element
        console.log(item);       
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])