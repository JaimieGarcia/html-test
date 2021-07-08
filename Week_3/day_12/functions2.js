// //Declare an add function
// function add(number1, number2) {
// 	return number1 + number2;
// }

// //Declare a function that takes a function as an argument
// function doMath(operation, number1, number2) {
// 	return operation(number1,number2);
// }

// //Pass a function into another.
// let sum = doMath(add, 1, 2);
// console.log(sum);

// // let myarray = [1, 2, 3];


// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });

// /* Example of function that's not helpful 
// let passingStudents = students.filter(function(student){
// 	return true;
// }); */

// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// console.log(passingStudents);
// console.log("Ringos: "); 
// console.log(ringos);



// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.find(function(student){
// 	return student.average > 50;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90}
// ];

// console.log("The first passing student: ");
// console.log(firstPassingStudent);


// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];


/* Math */
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

/* Reduce */
let students = [
	{name: 'Cam Newton', assignmentsCompleted: 6},
	{name: 'Ted Ginn', assignmentsCompleted: 10},
	{name: 'Greg Olsen', assignmentsCompleted: 8}
]

let totalAssignments = students.reduce(function(sum,current){
	return sum + current.assignmentsCompleted;
}, 0);

totalAssignments === 24;

console.log("Total assignments: ")
console.log(totalAssignments);