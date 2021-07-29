// const promiseA = new Promise((resolve, reject) => {
//     let statusCode = 404; // some complicated action that might fail!

//     // Check and see if the result meets our criteria
//     if (statusCode == 200) {
//         // If it does, resolve!
//         resolve(statusCode);
//     } else {
//         // If it doesn't, reject!
//         reject(statusCode);
//     }
// });

// promiseA
//     .then(
//         (va1) => console.log("Async logging has value: " + val), // Resolve 
//         // (err) => console.log("Error: " + err) // Reject
// )
// .catch((err) => {
//     console.log("Promise Rejected! Status Code: " + err);
// });
// console.log("This is the immediate log!"); // Happens synchronously 

// async function myFunc() {
//     return 1;
// }

// myFunc().then(alert);

// Await
// async function timedAction() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 1000);
//     })

//     let result = await promise;

//     alert(result);
// }

// timedAction();

// let url = "https://www.google.com";
// let options = "GET";
// let fetchResults = fetch(url, [options]);

// let url = "https://www.google.com";
// let options = "GET";

// async function getStuffFromWeb() {
//     let response = await fetch (url);

//     if (response.ok) {
//         let json = await response.json();
//     } else {
//         alert("HTTP-Error: " + response.status)
//     }
// }
// Rememeber keyboard shortcut (command + shift + p) for command palette to give all commands and keyboard shortcuts 

// Fetch Promise Chaining: Ex 1	
// fetch("https://javascript.info/article/promise-chaining/user.json")
//     .then(function (response) {
//         return response.text();
//     })
//     .then(function (text) {
//         alert(text);
//     });


// Fetch Promise Chaining: Ex 1	
// fetch("https://javascript.info/article/promise-chaining/user.json")
//     .then((response) => response.json())
//         .then((user) => fetch('https://api.github.com/users/${user.name}'))
//         .then((response) => response.json())
//         .then(githubUser => {
//             let img = document.createElement("img")
//             img.src = githubUser.avatar_url;
//             img.clasSName = "promise-avatar-example";
//             document.body.append(img);
//     });

// Fetch Async/Await 
async function showAvatar() {

    // read our JSON
    let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  }
  
  showAvatar();