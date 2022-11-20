function worldTour(input) {
    let allStops = input.shift()


    for (const line of input) {
        if (line !== 'Travel') {
            let [command, ...rest] = line.split(':').filter(n => n);

            switch (command) {
                case 'Add Stop':
                    rest[0] = Number(rest[0])
                    if ((rest[0]) >= 0 && rest[0] <= allStops.length - 1) {
                        allStops = allStops.substring(0, rest[0]) + rest[1] + allStops.substring(rest[0])
                    }
                    console.log(allStops);
                    break;

                case 'Remove Stop':
                    rest[0] = Number(rest[0])
                    rest[1] = Number(rest[1])
                    if (rest[0] >= 0 && rest[0] <= allStops.length - 1 && rest[1] >= 0 && rest[1] <= allStops.length - 1) {
                        allStops = allStops.substring(0, rest[0]) + allStops.substring(rest[1])
                    }
                    console.log(allStops);
                    break;

                case 'Switch':
                    while (allStops.includes(rest[0])) {
                        allStops = allStops.replace(rest[0], rest[1]);
                    }
                    console.log(allStops);
                    break;
            }
        }
        if (line === 'Travel') {
            console.log(`Ready for world tour! Planned stops: ${allStops}`);
        }
    }
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
