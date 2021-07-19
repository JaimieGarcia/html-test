// the JavaScript DOM (Document Object Model) is and we will look at the different selectors like:
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// EXAMINE THE DOCUMENT OBJECT 
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent = 'Hello';
// console.log(document.forms); 
// console.log(document.links); 
// console.log(document.images);

// SELECTORS: GET ELEMENT BY ID 
// console.log(document.getElementByID('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';


let headerTitle = document.getElementById('header-title');