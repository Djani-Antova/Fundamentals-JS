function solve(char1, char2) {
    let x = char1.charCodeAt();
    let y = char2.charCodeAt();
    let minChar = Math.min(x, y);
    let maxChar = Math.max(x, y);
    let buff = "";
    for (let index = minChar + 1; index < maxChar; index++) {
        const char = String.fromCharCode(index);
        buff += " " + char;
    }
    console.log(buff);
}