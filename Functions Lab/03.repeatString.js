function repeatString(string, num) {
    
    // let res = '';
    // let index = 0;
    // while (index < num) {
    //     res+=string;
    //     index++;
    // }
    // console.log(res);

    let res = '';
    for (let i = 0; i < num; i++) {
        res +=string;        
    }
    return res
    
}
console.log(repeatString("abc", 3))
