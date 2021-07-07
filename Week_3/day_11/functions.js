console.log("Script is loaded!");
// let a =1; 
// let b =2;
// console.log(a+b);


function add(a, b) {
    console.log("We are adding " + a + " + " + b);
    return a + b;
}

//console.log(add(2, 3));
//console.log(add(3 + 3));
//console.log(add(5, 35234));
//console.log(add(27, 3234));
//console.log(add(2865, 2353));
//console.log(add(23465, 2353));

function say(something) {
    console.log(something);
}

//say("woah dude");
say();

// Bad example. This will add the numbers, but we will never see the result until we console.log it
//function add(number1, number2) {
//    number1 + number2;
//}

//function add(number1, number2) {
//    return number1 + number2;
//}

//function add(number1 = 0, number2 = 0, number3 =0) {
//    return(number1 + number2 + number3);
//}

//let sum = add(2, 3);
//console.log(sum); 



// function add() {
//     let sum = 0;
//     for (let i = =0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// let sum = add(2, 3, 4, 6, 7 , 8, 9);
// console.log(sum); 

// addTwoNumbers(1, 2, 3, 4, 5, 6);




function addAllNumbers(a, b, ...theOtherNumbers); {
    console.log ("adding " + a + " + " + b);
    if (theOtherNumbers.length > 0) {
        console.log("Not adding the rest: " + theOtherNumbers);
    }
    return a + b;
}

console.log(addTwoNumbers (1, 2));
console.log(theOtherNumbers);