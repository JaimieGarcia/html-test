// Write an asynchronous function and call it with async/await
// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function

async function getRandomNumber() {
    return greeting = await Promise.resolve("Get Random Number: ");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 500)
    });

    let result = await promise;

    alert(result);
}

async function getRandomNumber() {
    return 23;
};

getRandomNumber().then(alert);