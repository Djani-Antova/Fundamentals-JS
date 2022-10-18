function tseamAccount(array) {
    let initialAccount = array.shift().split(' ');

    for (let line of array) {

        if (line !== "Play!") {
            let [command, game] = line.split(" ");
            switch (command) {
                case "Install":
                    if (!initialAccount.includes(game)) {
                        initialAccount.push(game);
                    }
                    break;
                case "Uninstall":
                    if (initialAccount.includes(game)) {
                        let index = initialAccount.indexOf(game);
                        initialAccount.splice(index, 1);
                    }
                    break;
                case "Update":
                    if (initialAccount.includes(game)) {
                        let index = initialAccount.indexOf(game);
                        initialAccount.splice(index, 1);
                        initialAccount.push(game);
                    }
                    break;
                case "Expansion":
                    let gameParts = game.split("-");
                    let oldVersion = gameParts[0];
                    let newVersion = gameParts.join(':');

                    if (initialAccount.includes(oldVersion)) {
                        let index = initialAccount.indexOf(oldVersion);
                        initialAccount.splice(index + 1, 0, newVersion);
                    }
                    break;
            }
        }
    }
    console.log(initialAccount.join(' '));
}
// tseamAccount(['CS WoW Diablo',
//     'Install LoL',
//     'Uninstall WoW',
//     'Update Diablo',
//     'Expansion CS-Go',
//     'Play!'])
tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']
)
