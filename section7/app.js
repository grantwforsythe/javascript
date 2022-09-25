const title = document.querySelector('#main-header');
const ul = document.querySelector('#main-list');
const section = document.querySelector('section');

title.textContent = 'Title';
section.style.backgroundColor = 'blue';

// Toggle the visability of the list
let visability = true;
const button = document.querySelector('button');
button.addEventListener('click', () => {
    section.style.display = visability ? 'none' : 'block';
    visability = !visability;
});

// Creating elements
const li = document.createElement('li');
li.textContent = 'This was created in JavaScript';
ul.appendChild(li);
