// I looked at this site to try to randomize the angle of the dolls in a loop, but I couldn't get it to work <https://forum.processing.org/two/discussion/21006/how-to-give-random-colour-and-transparency-to-an-object-class-from-an-array-in-the-object>

var angle = 0.0

var r;
var g;
var b;
var a;

function setup() {
  createCanvas(1100, 1100);
  randomColor = color(random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255));
  background("silver");
}

function draw() {
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) 
    var scalar = random(0.25, 1.5);
    nestingdoll(i, 110, scalar);
  }

//The nestingdoll is derived from the owl function found in our p5.js Make text

function nestingdoll(x, y, s) {
  push();
  translate(mouseX, mouseY);
  rotate(angle);
  scale(s); // Set the scale
  stroke(randomColor);
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255);
  ellipse(0, -67, 30, 30) // Face
  fill(0);
  ellipse(-6, -70, 4, 4); // Left eye
  ellipse(6, -70, 4, 4); // Right eye
  fill("red");
  ellipse(0, -60, 8, 8); // Mouth
  fill(randomColor2); // Apron
  ellipse(0, -25, 40, 40);
  stroke(randomColor2);
  strokeWeight(5);
  line(-35, -35, 35, -35);
  pop();
}