// I looked at this site to try to randomize the angle and the transparency of the dolls in a loop, but I couldn't get it to work <https://forum.processing.org/two/discussion/21006/how-to-give-random-colour-and-transparency-to-an-object-class-from-an-array-in-the-object>

let rot_angle // This doesn't work; I don't know why. No error messages. 

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background("silver");
  randomSeed(0);
  for (var i = 35; i < width + 40; i += 40) {
      if (i%5==0) {
      rot_angle=20;
    } else {
      rot_angle=0;
    }
      var scalar = random(0.25, 1.5);
      /*var transparency = random(0, 255); -- would love to know why this doesn't work */
      nestingdoll(i, 110, scalar);
  }
}

//The nestingdoll is derived from the owl function found in our Make text
function nestingdoll(x, y, s) {
  push();
  translate(x, y);
  scale(s); // Set the scale
  /*stroke(t); // Set the transparency*/
  stroke("blue");
  strokeWeight(70);
  line(0, -35, 0, -65); // Body
  noStroke();
  fill(255);
  ellipse(0, -67, 30, 30) // Face
  fill(0);
  ellipse(-6, -70, 4, 4); // Left eye
  ellipse(6, -70, 4, 4); // Right eye
  fill("fuchsia");
  ellipse(0, -60, 8, 8); // Mouth
  fill("yellow"); 
  ellipse(0, -25, 40, 40); // Apron
  stroke("yellow");
  strokeWeight(5);
  line(-35, -35, 35, -35);
  pop();
}