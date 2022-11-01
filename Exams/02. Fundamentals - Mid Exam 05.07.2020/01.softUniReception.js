function softUniReception(input) {
    let efficiencyOfAll = input.splice(0, 3).map(Number); 

    let efficiency = 0;

    for (let element of efficiencyOfAll) {
        efficiency += element;
    }
    

    let time = 0;
    let countStudents = input.map(Number) 

    while(countStudents > 0 ){
        countStudents -= efficiency;
        time++
        if(time % 4 == 0){
            time +=1
        }
    }
    console.log(`Time needed: ${time}h.`)
}
softUniReception(['5', '6', '4', '20'])
//softUniReception(['1','2','3','45'])