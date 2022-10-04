    function spiceMustFlow(startYield) {
        let daysCounter = 0;
        let spicesExtract = 0;
    
        while (startYield >= 100) {
            daysCounter++;
            spicesExtract += startYield - 26;
            startYield -= 10;
        }
        console.log(daysCounter);
        if (daysCounter !== 0) {
            console.log(spicesExtract - 26);
        } else {
            console.log(spicesExtract);
        }
    }

spiceMustFlow(111)