// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//a <p> with red text that says “Hey I’m red!”
const myPeeTag = document.createElement('p');
myPeeTag.textContent = "Hey I'm red!";
myPeeTag.style.color = 'red';
container.appendChild(myPeeTag);

//an <h3> with blue text that says “I’m a blue h3!”
const myH3Tag = document.createElement('h3');
myH3Tag.textContent = "I'm a blue h3!";
myH3Tag.style.color = 'blue';
container.appendChild(myH3Tag);

/* a <div> with a black border and pink background color with the following 
elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, 
append the <h1> and <p> to it before adding it to the container. */

const DivBlackPink = document.createElement('div');
DivBlackPink.style.cssText = 'border: 2px solid black; background: pink;';

const myH1Tag = document.createElement('h1');
myH1Tag.textContent = "I'mm in a div!!!";

const meeTooPTag = document.createElement('p');
meeTooPTag.textContent = "ME TOO!!!";

DivBlackPink.appendChild(myH1Tag);
DivBlackPink.appendChild(meeTooPTag);
container.append(DivBlackPink);

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });