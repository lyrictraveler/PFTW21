/* eslint-disable no-undef */
//I was inspired by this design to try to figure out how it works: https://stuartwainstock.com/p5-js-radial-art-sketch/

let rotateBy = 5;

// Allow user to interact with the program

const stroke1 = prompt('enter a basic color name in lowercase', 'fuchsia')
let string = prompt('what is your mood?', 'happy');
let heft = prompt('pick a number between 1 and 10', '5');

// Setting the stage

function setup() {
  createCanvas(windowWidth, windowHeight);
 // background('black');
  angleMode(degrees);
}

// Creating the radial arm

function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360); // creating a slice of a circle on the canvas
  noFill();
  stroke(stroke1);
  strokeWeight(heft); // it worked!!!
  textSize(200); 
  text(string, 10, 100 / alt); // word, x-coordinate, y-coordinate; it worked with the prompt!!!
  stroke('white');
  ellipse(100 / alt, 200, 200);
  line(10, 10, 800, 800);
}

// Making the automagic work!

function draw() {

  translate(200, 200);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 5; // I thought this was controlling the speed of the rotation, but this still confuses me.
}

// Defining what the mouse does

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}