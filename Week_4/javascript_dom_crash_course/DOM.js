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


// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3x #000';

// GET ELEMENTS BY CLASS NAME - intentionally plural 
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error
// items.style.backgroundColor = '#f4f4f4';

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GET ELEMENTS BY TAG NAME 
// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }