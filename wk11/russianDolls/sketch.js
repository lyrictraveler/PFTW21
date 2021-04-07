// I looked at this site to try to randomize the angle of the dolls in a loop, but I couldn't get it to work <https://forum.processing.org/two/discussion/21006/how-to-give-random-colour-and-transparency-to-an-object-class-from-an-array-in-the-object>

let rot_angle // This doesn't work; I don't know why. No error messages. 

var r;
var g;
var b;
var a;

// Reload the page to see color-changing dolls. Wish I could figure out how to make each of the dolls a different color rather than all the same!
function setup() {
  createCanvas(480, 120);
  randomColor = color(random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255));
}

function draw() {
  background("silver");

  randomSeed(0);
  // See above. Effort to rotate the angle does not work. 
  for (var i = 35; i < width + 40; i += 40) {
    if (i % 5 == 0) {
      rot_angle = 20;
    } else {
      rot_angle = 0;
    }
    var scalar = random(0.25, 1.5);
    nestingdoll(i, 110, scalar);
  }
}


// The nestingdoll is derived from the owl function found in our Make text.
function nestingdoll(x, y, s) {
  push();
  translate(x, y);
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