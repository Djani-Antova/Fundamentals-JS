function heroes(input) {
    class Hero {
        constructor([name, hp, mp]) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);

            this.alive = hp > 0;
        }

        CastSpell(mp, spell) {
            if (!this.alive) {
                return;
            }

            if (this.mp >= mp) {
                this.mp -= mp;
                console.log(`${this.name} has successfully cast ${spell} and now has ${this.mp} MP!`);
            } else {
                console.log(`${this.name} does not have enough MP to cast ${spell}!`);
            }
        }

        TakeDamage(damage, attacker) {
            if (!this.alive) {
                return;
            }

            this.hp -= damage;
            if (this.hp > 0) {
                console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
            } else {
                this.alive = false;
                console.log(`${this.name} has been killed by ${attacker}!`);
            }
        }

        Recharge(mp) {
            if (!this.alive) {
                return;
            }

            mp = Math.min((200 - this.mp), mp);
            this.mp += mp;
            console.log(`${this.name} recharged for ${mp} MP!`);
        }

        Heal(hp) {
            if (!this.alive) {
                return;
            }

            hp = Math.min((100 - this.hp), hp);
            this.hp += hp;
            console.log(`${this.name} healed for ${hp} HP!`);
        }

        toString() {
            return [this.name, `  HP: ${this.hp}`, `  MP: ${this.mp}`].join('\n');
        }
    }

    // take number of heroes
    let n = Number(input.shift());
    let heroes = {};

    // repeat n times
    for (let i = 0; i < n; i++) {
        // - create new hero
        let heroData = input.shift().split(' ');
        let name = heroData[0];
        heroes[name] = new Hero(heroData);
    }

    // repeat for remaining input until End
    while (input[0] != 'End') {
        // - parse and execute
        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let hero = heroes[name];

        hero[command](p1, p2);
    }

    console.log(Object.values(heroes).filter(h => h.alive).join('\n'));
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);

heroes([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
]);