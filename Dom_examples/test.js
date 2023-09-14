const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const myPee = document.createElement('p');
myPee.setAttribute('style', 'color: red;');
myPee.textContent = "Hey I'm red!";

container.appendChild(myPee);

// an <h3> with blue text that says “I’m a blue h3!”

const blueHeading = document.createElement('h3');
blueHeading.setAttribute('style', 'color:blue;');
blueHeading.textContent = "I'm a blue h3";

container.appendChild(blueHeading);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, 
// append the <h1> and <p> to it before adding it to the container.

const myDiv = document.createElement('div');
myDiv.setAttribute('style', 'border-color: black; border-width: 1px; background-color: pink;');

const divHeading = document.createElement('h1');
divHeading.textContent = "I'm in a div!";

const para = document.createElement('p');
para.textContent = "ME TOO!";

myDiv.appendChild(divHeading);
myDiv.appendChild(para);
container.appendChild(myDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});