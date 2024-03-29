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

// QUERY SELECTOR works like jquary, but for one item... the first one
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #f4f4f4';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector(input[type = "submit"]);
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERY SELECTOR ALL works similar to getelementsbytagname by grabbing multiple things
let titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}