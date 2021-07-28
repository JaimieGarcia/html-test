"use strict"; // tells JS to be less forgiving 
let num = "lol";
let dom = "lmao";

let num = prompt("Enter a numerator: ");
let num = prompt("Enter a denominator: ");

try {
    num = Number.parseFloat(num);
} catch (error) {
    console.log("Numerator is not a real number! Setting to 1.")
    num = 1;
}

try {
    dom = Number.parseFloat(num);
} catch (error) {
    console.log("Denominator is not a real number! Setting to 1.")
    dom = 1;
}

let result = Number.parseFloat(num) / Number.parseFloat(dom);
console.log("Math result " + result);