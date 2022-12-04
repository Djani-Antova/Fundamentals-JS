function taxCalculator(input) {
    
/* o "vehicle1>>vehicle2>>vehicle3…"
o	 "family"
o	 "heavyDuty"
o	 "sports"
 */

let info = input.join(">>");
let allCars = info.split(">>");
let initialTax = 0;
let increase = 0;
let decrease = 0;
let totalCurrentCarTax = 0;
let totalTax = 0;

for (let i = 0; i < allCars.length; i++) {
    let currentCar = allCars[i];     
    let [type, year, kilometers] = currentCar.split(" ");
    year = Number(year);
    kilometers = Number(kilometers);

    switch (type) {
        case "family":
            let initialFamilyTax = 50;
            decrease = year * 5;
            increase = Math.floor(kilometers / 3000) * 12;
            totalCurrentCarTax = initialFamilyTax - decrease + increase;
            totalTax += totalCurrentCarTax;
            break;

        case "heavyDuty":
            let initialHeavyDutyTax = 80;
            decrease = year * 8;
            increase = Math.floor(kilometers / 9000) * 14;
            totalCurrentCarTax = initialHeavyDutyTax - decrease + increase;
            totalTax += totalCurrentCarTax;
            break;

        case "sports":
            let initialSportsTax = 100;
            decrease = year * 9;
            increase = Math.floor(kilometers / 2000) * 18;
            totalCurrentCarTax = initialSportsTax - decrease + increase;
            totalTax += totalCurrentCarTax;
            break;

        default:
            console.log(`Invalid car type.`);
            continue;
    }
    console.log(`A ${type} car will pay ${totalCurrentCarTax.toFixed(2)} euros in taxes.`);
}   
console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);

}


//taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))
taxCalculator([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])