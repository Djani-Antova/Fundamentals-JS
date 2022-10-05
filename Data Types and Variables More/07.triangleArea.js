
function triangleArea(a, b, c) {

    let semi = (a + b + c) / 2;
    let area = Math.sqrt(semi* (semi-a) * (semi-b) * (semi-c));
    console.log(area);    
    
} triangleArea(2, 3.5, 4 )