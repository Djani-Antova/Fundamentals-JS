function piccolo(input) {

    let parkingList = {}
    for (const el of input) {
        let [direction, carNumber] = el.split(", ");

        if (direction == "IN") {
            parkingList[carNumber] = 1
        } else if (direction == "OUT") {
            parkingList[carNumber] = 0
        }
    }

    let availableCars = Object.entries(parkingList).filter(kvp => kvp[1] > 0);
    let sortedCars = availableCars.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    if (sortedCars.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        for (const key of sortedCars) {
            console.log(key[0]);
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])