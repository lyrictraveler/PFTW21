/* eslint-disable no-undef */
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = []; // create new array "cards"
const gameState = {

};
let cardfaceArray = [];
let cardBack;

function preload() {
  cardBack = loadImage('images/cardback.png'); 
  cardfaceArray = [
    loadImage('images/impatiens.jpg'),
    loadImage('images/jonquil.jpg'),
    loadImage('images/orchid2.jpg'),
    loadImage('images/orange.jpg'),
    loadImage('images/peony.jpg'),
    loadImage('images/peacerose.jpg')
  ]
}

function setup() {
  createCanvas(1300, 1500);
  background(0);
  let selectedFaces = [];
  for (let z = 0; z < 6; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesn't get selected again
    cardfaceArray.splice(randomIdx, 1);
  }

  selectedFaces = shuffleArray(selectedFaces);
  // create a loop for rows 
  for (let rows = 0; rows < 3; rows++) {

    // create a loop for columns
    for (let cols = 0; cols < 4; cols++) {
      const faceImage = selectedFaces.pop();
      // create new instance of card
      cards.push(new Card(startingX, startingY, cardfaceArray[0]));
      startingX += 225;
    }
    startingY += 325; // starting a new row
    startingX = 100; // starting at left hand side
  }
}

// I think "k" in this next function refers to the "Loop of All Cards", but I'm not sure?

function mousePressed() {
  for (let k = 0; k < cards.length; k++) {
    if (cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
    }
  }
}

// added parameters to constructor 

class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 300;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.show();
  }

  show() {
    if (this.face === DOWN) {
      fill('aqua');
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardBack, this.x, this.y, 200, 300);
    } else {
      fill('aaa');
      rect(this.x, this.y, this.width, this.height, 10);
      image(this.cardFaceImg, this.x, this.y, 200, 300);
    } 
  }

  didHit(mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }

function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    // Pick randow index
    const idx = Math.floor(Math.random() * counter);
    // decrement counter by 1
    counter--;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}

}
