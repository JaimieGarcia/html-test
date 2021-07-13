class Fruit {
    fruitName = "fruit";
    howNutritious = "unknown";
    constructor(name) {
        this.fruitName = name;
        this.calculateNutrition();
    }
    speak = function () {
        console.log("Hey my name is " + this.fruitName);
    };
    calculateNutrition = function () {
        if (this.fruitName === "Apple") {
            this.howNutritious = "very";
        } else if (this.fruitName === "Banana") {
            this.howNutritious = "pretty";
        } else {
            this.howNutritious = "not very";
        }
    };
    sayNutrition = function () {
        console.log
        ("This " + this.fruitName + " is " + howNutritious + " nutritious")
    }
}

let apple = new Fruit("Apple");
let banan = new Fruit("Banana");
let candy = new Fruit("Candy");

apple.sayNutrition()
banan.sayNutrition()
candy.sayNutrition()

console.log("Our first fruit is named: " + apple.name);
console.log("Our second fruit is named: " + banan.name);
console.log("Our third fruit is named: " + candy.name);

apple.speak();
banan.speak();
candy.speak();


class Animal {
    let = 0;
    brain = "regular";
    speak = function () {
        console.log("I'm an animal");
    }
}

