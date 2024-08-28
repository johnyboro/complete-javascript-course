`use strict`; // enables strict mode for more errors and safety

/*
// function declaration
function sigmaLevel(vapesOwned, age) {
    return `Your sigma level is ${vapesOwned/age}`;
}

console.log(sigmaLevel(100, 12));

// function expression
const GyattLevel = function (sigma, balance) {
    return sigma * balance;
}
// function expression cannot be called before its declaration
console.log(GyattLevel(8, 10000));

// arrow function
const rizzLevel = balance => balance/10;

console.log(rizzLevel(10000));

// complex arrow function
const aura = (vapesOwned, rizzLevel) => {
    const aura = vapesOwned * rizzLevel;
    return aura;
}

console.log(aura(20, 1000));

// arrays
const milk = ["cowMilk", "goatMilk", "buffaloMilk"];
const animals = new Array("cow", "buffalo", "goat");
console.log(milk, animals);
console.log(milk.length);
console.log(milk[0], milk[milk.length - 1]);
animals[2] = "panda";
console.log(animals);

milk.push("whiteMonster");
const newLenght = milk.unshift("redbull");
console.log(newLenght, milk);
const popped = milk.pop();
const shifted = milk.shift();
console.log(popped, shifted, milk);

console.log(milk.indexOf("cowMilk"));
console.log(milk.includes("cowMilk")); //strict

// object
const car = {
    brand: "boro",
    models: ["v1", "v2", "race"],
    color: "red",
    sound: "vroom",
    doors: 10,
    speed: 500,
}
console.log(car);

console.log(car.brand); // dot notation
console.log(car["brand"]) // bracket notation, computable
console.log(car["mod" + "els"]);
console.log(car.models[0]);

const interest = prompt(`What property do you need?`);
if(car.interest) {
    console.log(car[interest]);
} else {
    console.log(`Lack of such property`);
    const response = prompt(`Do you wish to add the property? (enter property value or 'no')`)
    response === "no" ? console.log("ok") : car[interest] = response; //adding a property
}
console.log(car);

const car = {
    brand: "boro",
    models: ["v1", "v2", "race"],
    color: "red",
    sound: "vroom",
    doors: 10,
    hp: 500,

    // calcSpeed: function (hp, doors) { // stoopid function
    //     return hp/doors;
    // }

    // calcSpeed: function () { // function
    //     return this.hp / this.doors;
    // }

    calcSpeed: function () { // optimized function
        this.speed = this.hp / this.doors;
        return this.speed;
    },

    stringify: function () {
        return `${this.brand} car is aviable in ${this.models} models and a ${this.color} color. It reaches a top speed of ${this.calcSpeed()} km/h.`;
    },
}
console.log(car.stringify());
console.log(car);

// for loop
const milk = ["cowMilk", "goatMilk", 123, "buffaloMilk"];
console.log(`---MILK---`)
for (let i = 0; i < milk.length; i++) {
    console.log(milk[i]);
}

// continue
console.log(`---JUST STRINGS---`)
for (let i = 0; i < milk.length; i++) {
    if (typeof milk[i] !== "string") continue;
    console.log(milk[i]);
}

// break
console.log(`---BREAK ON NUMBER---`);
for (let i = 0; i < milk.length; i++) {
    if (typeof milk[i] === "number") break;
    console.log(milk[i]);
}

// backwards
console.log(`---BACKWARDS---`)
for (let i = milk.length - 1; i >= 0; i--) {
    console.log(milk[i]);
}

// while loop
let roll = Math.trunc(Math.random() * 6) + 1;
while (roll !== 6) {
  console.log(roll);
  roll = Math.trunc(Math.random() * 6) + 1;
  if (roll === 6) console.log(`Rolled 6!!!`);
}
*/
