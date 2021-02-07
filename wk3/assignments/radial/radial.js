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
  textSize(300);
  text(string, 10, 100 / alt); // word, x-coordinate, y-coordinate; it worked with the prompt!!!
}

// Making the automagic work!

function draw() {
  background("white");
  translate(200, 200);
  rotate(rotateBy);
  makeArm(rotateBy);
  rotateBy += 2; // I *thought* this was controlling the speed of the rotation, but this still confuses me.

// Defining what the mouse does

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}

/* Create a function to draw one ‘arm’ of your radial design and then use `rotate` to rotate your canvas a specified amount and then redraw your arm. You will find the most interesting designs will change after a certain amount of applications (maybe after a full rotation…?). Using parameters, alter the ‘arm’ and then continue the process. And by all means, don’t think you have to only use a small portion of the canvas for each iteration. Experiment and see what looks best.

Must have:
Must be a radial design generated from multiple applications of a function.
Must be parameterized with at least three parameters
Must only ‘draw’ within your function. Nothing should be drawn outside of your repeated function.
Should have:
Should be error-free. I should not see any errors in the dev console.
Should be clean, well commented code.
Should have appropriately named parameters.
Nice to have:
Ability to interact with sketch as it processes.
Ability to stop the draw loop. */
