//I was inspired by this design to try to figure out how it works: https://stuartwainstock.com/p5-js-radial-art-sketch/

let rotateBy = 10;

// Allow user to interact with the program

let stroke1 = prompt("enter a basic color name in lowercase", "fuchsia");
let string = prompt("what is your mood?", "happy");
let heft = prompt("enter a number between 1 and 10", 5);

// Setting the stage

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background('white'); // I chose to put background in the draw function rather than in the setup function. When the background is defined in the setup function the word becomes illegible as it is overwritten.
  angleMode(degrees);
}

// Creating the radial arm

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360); // creating a slice of a circle on the canvas
  noFill();
  stroke(stroke1);
  strokeWeight(heft); // my made-up value worked!!!
  textSize(200);
  text(string, 10, 100 / alt); // word, x-coordinate, y-coordinate; it worked with the prompt!!!
}

// Making the automagic work!

function draw() {
  background("white");
  translate(300, 300);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 2; // I thought this was controlling the speed of the rotation, but this still confuses me.
}

// Defining what the mouse does

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}