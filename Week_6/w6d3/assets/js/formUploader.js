// module.exports.submit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }

var formUploader = require('formuploader')

let form = document.querySelector('form')
form.addEventListener("click", (e) => {
  e.preventDefault();
});

form.onsubmit = formUploader.submit;

