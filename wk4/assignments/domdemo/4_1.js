/*Use DOM selectors to 
1) Create a new headline element
2) Append the new headline to myEmptyDiv
3) And an event listener to change the background color when the headline is clicked. */

// create Div, give it an id and class

let div = document.createElement('div');

div.id = 'myEmptyDiv';

div.className = 'llamas';

// create a new heading and add it to the div

let h2 = document.createElement('h2');
h2.textContent = 'Llamas change color when clicked!';

div.appendChild(h2);

// add div to the document
document.body.appendChild(div);

h2.addEventListener('click',(event) => {console.log('clicked');
});


