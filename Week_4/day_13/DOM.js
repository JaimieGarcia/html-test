// let username = document.getElementById("username");

// username.value = "This is the new useranme!";

let header = document.querySelector("Header");
console.log("Header");
console.log(header);

let sections = document.querySelectorAll("Sections");
console.log("Sections:");
console.log(sections); 

let currentSection = document.querySelector("Section.current");
console.log("Current Section:");
console.log(currentSection);

let afterCurrent = currentSection.nextElementSibling;
console.log("After the current section: ");
console.log(afterCurrent);

let myH2 =  currentSection.previousElementSibling.firstChild;
console.log("My H2: ");
console.log(myH2);

let myDiv = document.querySelector("h2,highlight").parentElement.parentElement;
console.log("My Div: ");
console.log(myDiv);

let sectionWithH2 = (document.querySelectorAll("section h2")).map(
    function (headline) {
        return headline.parentElement;
    }
)
console.log("Sections with H2s: ");
console.log(sectionsWithH2);