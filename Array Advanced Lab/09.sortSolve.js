function solve() {

    let arr = [5, 1, 11, 3, 100];

    let sortedArr = arr.filter(function(a,b){
        return b - a
    })
    console.log(sortedArr);

    let sortedArr2 = arr.filter((a,b) => b - a)

    console.log(sortedArr2);

    let arr3 = ['bb',"a", "ccc"];
    let sortedArr3 = arr3.sort((a,b) => {
        return a.length - b.length
    })

    console.log(sortedArr3);
    
    let sortedArr4 = arr3.sort(function(a,b){
        return a.localeCompare(b)
    })
    console.log(sortedArr4);
    
}
solve()