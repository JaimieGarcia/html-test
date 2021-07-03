// INTRO AND VARIABLES

// please note that js will resolve from
// top left to bottom right 

console.log("Hello world");
console.log("My name is Jaimie");

//let is a keyword that tells JS we are setting up variables 
// x is the "name" of the variable sometimes referred to as a reference 
// = is known as the assignment operator, and lets you set values
// 5 is the "literal" value, otherwise what the x literally represents 
let x = 5;

// when you "set up" a variable, that's known as a declaration 
let y;
console.log("At this moment, y is undefined: " + y);
// when you set a value that's known as initialization 
y = 3; 

let z = 6 + 7;

console.log("the value z is " + z);

// below is a tempalte literal that shows the value of x
console.log(`the value of x is ${x}`);
// below is concatanation that does the same thing
console.log("the value of y is " + y);
console.log(y);

const MY_CONST = 7;

console.log(MY_CONST);

MY_CONST = 9;

console.log(MY_CONST);

// the code below is not legal
// you cannot reassign const variables
// MY_CONSTA = 9; 

// TYPES

// below we have a string
// this is a series of characters or numbers 
// wrapped around quotes 
let myString = "This is a string value";
console.log(myString);
// the line above is the same as below
// console.log("This is my string value");

// below we have a number 
// numbers will generally respect arithmetic 
let myNumber = 100; 
let myDecimalValue = 0.45; 

// below are boolean values
// they can be either true or false and nothing else
// they aign neatly with the state of a bit 
// which is either 0 or 1
let myBoolean = true;
let myOtherBoolean = false;

//TODO(write comment)
let myVariable = "abc";
console.log(typeof myVariable);

myVariable = 1;
console.log(typeof myVariable);

let coercedVariable = 7 + 7 + 7;
console.log(`the value of coercedVariable is ${coercedVariable}`);

// JS will always resolve from top left to bottom right 
// starts with the first two numbers and then thinks the next 7 is a string
coercedVariable = 7 + 7 + "7";
console.log(`the value of coercedVariable is ${coercedVariable}`);


coercedVariable = "7" + 7 + 7;
console.log(`the value of coercedVariable is ${coercedVariable}`);

let parsedInt = parseInt("10");
console.log(parsedInt);

let foo = null;

console.log(`This is the value of foo: ${foo}`);


let conditional = true;

if(conditional) {
    console.log("The conditional was true.");
} else {
    console.log("the conditional was false.");
}

let numberConditional = 2;

if (numberConditional === 5); {
    console.log("The number is equal to 5");
} else if (numberConditional > 3) {
    console.log("The number is at least bigger than 3");
} else if (numberConditional < 10) {
    console.log("The number is less than 10");
}

let equalityCheckNumber = 10;

if(equalityCheckNumber == "10"); {
    console.log("The values are equal");
}

if(equalityCheckNumber === "10"); {
    console.log("The values and types are equal");
}

if (true && false); {
    console.log("This code will never be reached");
}

if (true && 5 > 15); {
    console.log("This code will always be reached"); 
}

if (true || false); {
    console.log("as long as one of the conditions are met this message will be shown");
}

for(let i = 0; i < 10; i++); {
	console.log(i);
	console.log('before break'); // will only print once
	break; // exits the next loop
	console.log('after break'); //never happens
}

// i++ is the same as saying i = i + 1 
for (let i = 0, i <= 9; i++); {
    console.log(i);
}







