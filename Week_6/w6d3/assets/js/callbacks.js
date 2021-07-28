function calculator(operation, x, y) {
    return operation(x, y);
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// let result = calculator (add(1,2), multiply(3,4));
// console.log(result);

let num1 = add(1, 2); // 3
let num2 = multiply(23, 4); // 92
add(2, 4); // 6
calculator(add, 1, 3); // 4
calculator(multiply, 4, 5); // 20

console.log("Num1: " + num1);
console.log("Num2: " + num2);


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(4, 5, myDisplayer);
  myCalculator(7, 5, console.log); 


// Synchronous 
let numbers = [6, 7, 1, 2, 3, 4, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

// Asynchronous Example 1: Timer in console 
console.log('Starting timer!');

setTimeout(function afterTwoSeconds() {
  console.log("Two seconds have passed!");
}, 2000); // 2000 millaseconds 

console.log("This happens after the timeout function!");

// Asynchronous Example 2: Adds clock 
setInterval(timestamp, 1000);
let time = document.getElementById("time");

function timestamp() {
  let d = new Date();
  document.getElementById("time").innerHTML=
    time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

// Asynchronous Example 3: 
function carDisplayer(some) {
    document.getElementById("carZone").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open("GET", "mycar.html");
    setTimeout((req.onload = function() {
        if (req.status == 200) {
          myCallback(this.responseText);
        } else {
          myCallback("Error:" + req.status);
        }) => {}, 2000);
    }
    req.send();
  }
  
  getFile(carDisplayer); // This invokes it 

  //XML 
  function ajaxCall() {
    let ajaxRequest = new XMLHttpRequest();
  
    ajaxRequest.onreadystatechange = function() {
      if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
        if (ajaxRequest.status == 200) {
          let myDiv = document.getElementById('requestDiv');
          let newDiv = document.createElement('div');
          newDiv.innerHTML = ajaxRequest.responseText;
          myDiv.appendChild(newDiv);
        } else if (ajaxRequest.status == 400) {
          console.log('There was an error 400');
        } else {
          console.log('something else other than 200 was returned');
        }
      }
    };
  
    ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
    ajaxRequest.send();
  }

  function clearMain() {
      document.getElementById("requestDiv").innerHTML = "";
  }

  // Callback Hell
  var form = document.querySelector('form')
form.onsubmit = function (submitEvent) {
  var name = document.querySelector('input').value
  request({
    uri: "http://example.com/upload",
    body: name,
    method: "POST"
  }, function (err, response, body) {
    var statusMessage = document.querySelector('.status')
    if (err) return statusMessage.value = err
    statusMessage.value = body
  })
}

var formUploader = require('formuploader')
document.querySelector('form').onsubmit = formUploader.submit