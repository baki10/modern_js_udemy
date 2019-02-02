const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
const firstLi = list.firstElementChild;
const lastLi = list.lastElementChild;
const count = list.childElementCount;
// console.log(count);
const parent = listItem.parentElement;
// console.log(parent);
// console.log(firstLi.nextElementSibling); // 2nd element
// console.log(firstLi.nextElementSibling.previousElementSibling); // 1st element

// get child nodes
const childNodes = list.childNodes;
// get children
const children = list.children;
children[0].textContent = 'Hello world';
Array.from(children).forEach(li => {
    // li.textContent = 'Item New';
    // console.log(li);    
});

// CREATE ELEMENT
const li = document.createElement('li');
// add class
li.className = 'collection-item';
// add id
li.id = 'new-item';
// add attr
li.setAttribute('title', 'New Item');
// add text node
li.appendChild(document.createTextNode('New List Item'));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<button>x</button>';
li.appendChild(link);
// append li as child to ul
list.appendChild(li);

// REPLACE ELEMENT
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.getElementById('task-title');
oldHeading.parentElement.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const ul = document.querySelector('ul');
lis[0].remove();
ul.removeChild(lis[2]);

