let teachers = ["Shane", "Zack"];

console.log(teachers.push ("Josh"));

let arrayLength = teachers.length;
let oldTeacher = teachers.pop();

teachers.unshift("New Guy");
let newGuy = teachers.shift("Zack");

teachers[5] = "Mister Fiveo";
teachers[1] = "Lady Onsie";

console.log("At index 20: " + teachers [20]);
console.log("The array is now: " + arrayLength);
console.log("The old teacher was: " + oldteacher);
console.log(teachers);
console.log("The new guy was: " + newGuy);

teachers.unshift("One new person");
teachers.unshift("Two new person");
console.log(teachers);

console.log("Index of Shane: " + teachers.indexOf("Shane"));

let teacherSlice = teachers.slice(0, 3);
console.log("Teachers Splice is: ");
console.log(teachers);


let numberOfShanes = 0;
let indexofShanes;
for (let i = 0; i < teachers.length; i++) {
    if (teachers[i] === "Shane") {
    numberOfShanes++;
    indexofShanes,push(i); 
    }
}

teachers.forEach(function (item, index) {
    console.log(x + " is at index" + index);
});

console.log("Number of Shanes: " + numberOfShanes);
console.log("The indexes of Shanes: " + indexOfShanes);

console.log(teachers.join("&"));

let numbers = [4,7,2,3]; 
console.log(numbers);
numbers.sort();
console.log(numbers);

teachers.sort();
console.log(teachers);
numbers.reverse();
console.log(numbers);
teachers.reverse();
console.log(teachers);

let course = {
    name: "Javascript Fundamentals",
    awesome: true,
    teacherList: teachers,
};

let school = {
    name: "the place we go",
    courses : course,
};

console.log(course.awesome);
console.log(course.name);
console.log(course.teacherList);

console.log(school.course[0]);