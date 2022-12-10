function bossRush(input) {

    let count = Number(input.shift());
    let pattern =
      /[|](?<bossName>[A-Z]{4,})[|][:][#](?<title>[A-z]+\s{1}[A-z]+)[#]/g;
  
    for (let person of input) {
      let boss = person.match(pattern);
      let match = pattern.exec(boss);
      if (!match) {
        console.log("Access denied!");
      }
      while (match !== null) {
        console.log(`${match.groups.bossName}, The ${match.groups.title}`);
        console.log(`>> Strength: ${match.groups.bossName.length}`);
        console.log(`>> Armor: ${match.groups.title.length}`);
        match = pattern.exec(boss);
        break;
      }
    }
    
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])
// bossRush (['3',
// '|STEFAN|:#H1gh Overseer#',
// '|IVAN|:#Master detective#',
// '|KARL|: #Marketing lead#'])
