function distanceBetweenPoints(x1, y1, x2, y2) {
    x1 = Number(x1);
    x2 = Number(x2);
    let x = 0;
    let y = 0;

    if ((x1 <= 0 && x2 <= 0) || (x1 > 0 && x2 > 0)) {
        x = Math.abs(Math.abs(x1) - Math.abs(x2));
    }
    if ((x1 <= 0 && x2 > 0) || (x1 > 0 && x2 <= 0)) {
        x = Math.abs(x1) + Math.abs(x2);
    }
    if ((y1 <= 0 && y2 <= 0) || (y1 > 0 && y2 > 0)) {
        y = Math.abs(Math.abs(y1) - Math.abs(y2));
    }
    if ((y1 <= 0 && y2 > 0) || (y1 > 0 && y2 <= 0)) {
        y = Math.abs(y1) + Math.abs(y2);
    }
    let result = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    console.log(result);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
distanceBetweenPoints(2, 4, 5, 0)