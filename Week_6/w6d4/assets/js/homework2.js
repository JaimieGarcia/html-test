// Write an asynchronous function that accepts 1 parameter
//  A city name

// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:
// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test

// (Note: the API will only allow you 2 calls per second, 
// so if you are getting errors and you think you shouldn't be, 
// try calling fetching only ONCE per execution.)

console.log("You are currently in " + cityName);
async function cityName(fnParam) {
    return fnParam('input value');
}

const API_KEY = 'YOUR_API_KEY_HERE';
const API_URL = `https://geocode.xyz/seattle?json=1${API_KEY}&units=metric`;

(function() {
    'use strict';
    
    window.DI = window.DI || {};

    let injectCoordinates = function injectCoordinates(coordinates) {
        document.getElementById('latitude').innerHTML = coordinates.latitude;
        document.getElementById('longitude').innerHTML = coordinates.longitude;
    };

    let getLocation = function getLocation(successCallback, failureCallback) {
        navigator.geolocation.getCurrentPosition(
            function resolveLocation(position) {
                var coordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
    })

    console.log("Your coordinates are: " + injectCoordinates);
}});