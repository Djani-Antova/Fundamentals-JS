function towns(data) {
   
    let res = {};
    
    for (let cityInfo of data) {     

        let tokens = cityInfo.split(" | ");
        let city = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);;

        res.town = city;
        res.latitude = latitude;
        res.longitude = longitude;

        console.log(res);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])