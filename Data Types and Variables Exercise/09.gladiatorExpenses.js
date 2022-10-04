function gladiatorExpenses(fightLostCount, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armourBroken = 0;
    for (let i = 1; i <= fightLostCount; i++) {
        if (i % 2 === 0) {
            helmetBroken += 1;        }
        if (i % 3 === 0) {
            swordBroken += 1;        }
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBroken += 1;
            if (shieldBroken % 2 === 0) {
                armourBroken += 1;
            }
        }
    }
    let helmetCost = helmetBroken * helmetPrice;
    let shieldCost = shieldBroken * shieldPrice;
    let swordCost = swordBroken * swordPrice;
    let armourCost = armourBroken * armourPrice;

    let totalCost = helmetCost + shieldCost + swordCost + armourCost;
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    
)