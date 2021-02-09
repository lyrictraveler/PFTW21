// select empty div, assign to variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h2 inside of div
// create a new element
const heading = document.createElement('h2');
heading.innerHTML = 'Llamas change color when clicked';

// add event listener
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

// instructions for event
function handleHeadingClick () {
  console.log('Heading has been clicked');
  document.body.style.backgroundColor = 'white';
}
