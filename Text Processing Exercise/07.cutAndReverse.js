function cutAndReverse(input) {

    let length = input.length;
    let firstString = input.substring(0, length / 2);
    let firstStringreversed = firstString.split("")
        .reverse()
        .join("")

    let secondString = input.substring(length / 2);
    let secondStringReversed = secondString.split("")
        .reverse()
        .join("")

    console.log(firstStringreversed);
    console.log(secondStringReversed);

}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')