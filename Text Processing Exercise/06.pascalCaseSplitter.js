function pascalCaseSplitter(input) {

    let arr = [];
    let index = 1;
    let end = input.length;
    let cut = 0;

    while (index < end) {

        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            let currentArr = input.slice(cut, input.length)
            arr.push(currentArr);
            cut = index;
        }
        index++;

    }

    arr.push(input.slice(cut, input.length));

    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i - 1].replace(arr[i], '');
    }

    console.log(arr.join(", "));

}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')