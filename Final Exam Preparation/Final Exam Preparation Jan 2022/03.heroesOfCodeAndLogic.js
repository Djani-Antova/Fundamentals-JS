function heroesOfCode(input) {
    //take number of heroes
    let n = Number(input.shift());
    let heroes = {}


    // repeat n times 
    for (let i = 0; i < n; i++) {
        //create new hero
        let heroData = input.shift().split(' ');
        let name = heroData[0];
        let hp = Number(heroData[1]);
        let mp = Number(heroData[2])

        heroes[name] = {
            hp,              // 'hp': hp or 'hp: 70
            mp,
        }
    }
    //repeat for remaining input until End
    while (input[0] !== "End") {                    //  input[0] = line
        //parse and execute
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        hero = heroes[name];

        if (command == 'CastSpell') {
            if (hero.mp >= p1) {
                hero.mp -= p1
                console.log(`${name} has successfully cast ${p2} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${p2}!`);
            }

        } else if (command == 'TakeDamage') {
            hero.hp -= p1;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${p2}!`);

            }

        } else if (command == 'Recharge') {
            let mp = Math.min((200 - hero.mp), p1);  //mp - what CAN be recharged
            hero.mp += mp;
            console.log(`${name} recharged for ${mp} MP!`);

        } else if (command == 'Heal') {
            let hp = Math.min((100 - hero.hp), p1);  //mp - what CAN be recharged
            hero.hp += hp;
            console.log(`${name} healed for ${hp} HP!`);
        }
    }

    // print alive heroes
    for (let heroData of Object.entries(heroes)) {
        let name = heroData[0]
        let hero = heroData[1]
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}
heroesOfCode([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);
console.log('=======');

heroesOfCode(["4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"])