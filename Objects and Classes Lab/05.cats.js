function createCats(input) {

    class Cat {
        constructor(catName, catAge) {
            this.name = catName;
            this.age = catAge;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let line of input) {
        let catInfo = line.split(" ");
        let catName = catInfo[0];
        let catAge = catInfo[1];

        let cat = new Cat(catName, catAge)
        cat.meow(catName, catAge)
    }
}
createCats(['Mellow 2', 'Tom 5'])
console.log("========");
createCats(['Candy 1', 'Poppy 3', 'Nyx 2'])