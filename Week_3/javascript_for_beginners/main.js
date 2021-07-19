// alert('File Linked');

// EVENTS: Custom Button
// function doClick() {
//     alert('You Clicked!');
// }

// EVENTS: A better way to do the above:
// function changeText(id) {
//     id.innerHTML = 'You Clicked!';
// }

// Changing the Heading after adding an id to html file
// function changeText() {
//     let heading = document.getElementById('heading');
//     heading.innerHTML = 'You clicked!';
// }

// EVENTS: Show the date when you click or mouse over the button
// function showDate() {
//     let time = document.getElementById('time');
//     time.innerHTML = Date();
// }

// EVENT: onMouseOut
// function clearDate() {
//     let time = document.getElementById('time');
//     time.innerHTML = '';
// }

// FORM: Changing the background color 
//  function changeBackground(x){
//     console.log(x.value);
//     let body = document.getElementById('body');
//     body.style.backgroundColor = x.value;
//  }

 // FORM Validation
 function validateForm() {
     let firstName = document.forms["myForm"]["firstName"].value;

     if(firstName == null || firstName == "") {
         alert("First name is required");
         return false;
     }

     if(firstName.length < 3) {
        alert("First name must be at least 3 characters");
        return false;
    }
 }