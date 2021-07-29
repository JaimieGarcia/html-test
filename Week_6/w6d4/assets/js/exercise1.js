// Exercise 1: Rewrite the following code using async/await.

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// console.log(loadJson('http://httpstat.us/500').catch(alert)); // Error: 500

let url = "http://httpstat.us/500";
// let url ="https://javascript.info/article/promise-chaining/user.json";

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    } else {
        throw new Error(response.status);
    }
}

let result = loadJson(url);
loadJson(url);