//Declare an add function
function add(number1, number2) {
	return number1 + number2;
}

//Declare a function that takes a function as an argument
function doMath(operation, number1, number2) {
	return operation(number1,number2);
}

//Pass a function into another.
let sum = doMath(add, 1, 2);

