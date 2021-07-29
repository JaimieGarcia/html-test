// Exercise 1: Rewrite the following code using async/await.

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('http://httpstat.us/500')
  .catch(alert); // Error: 500

  