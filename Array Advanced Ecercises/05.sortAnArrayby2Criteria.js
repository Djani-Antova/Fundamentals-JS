function sortAnArrayby2Criteria(array) {

    let sortedArray = array.sort((a,b) => {

        return a.length - b.length || a.localeCompare(b)
    })
    console.log(sortedArray.join("\n"));
}
sortAnArrayby2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])