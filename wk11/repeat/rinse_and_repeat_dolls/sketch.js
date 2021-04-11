function setup() {
  createCanvas(500, 500);
  randomColor = color(random(255), random(255), random(255));
  randomColor2 = color(random(255), random(255), random(255));
  background("silver");
}

/*function draw() {
  background(0);
  for (var y = 32; y <= height; y += 8) {
    for (var x = 12; x <= width; x += 15) {
      ellipse(x+y, y, 16 - y/10.0, 16 - y/10.0);
    }
  }
}*/

function draw() {
  background("black");
  randomSeed(0);
  // loop here is set so the dolls don't run off the edge
  for (var i = 20; i <= width -20; i += 40) { 
    var scalar = random(0.20, 1.3)
    nestingdoll(i, 110, scalar)
    // Below I am trying to make the dolls disappear. All but the first doll disappear (?) when the mouse is pressed, but I don't actually understand how that is working, because the code seems to say that when mouse is pressed random colors shouldl appear, otherwise the default position is a white screen, so... I don't understand... I based this project on a previous experiment I did that did work as expected. See below.
      if (mouseIsPressed) { 
      fill (r, g, b);
      stroke (r, g, b);
    } else {
      fill (255);
    }
  }
}


function nestingdoll(x, y, s) {
  push();
  translate(x, height / 1.3); // trying to follow the rule of thirds for placement here 
  scale(s); // Set the scale
  stroke("white"); // creating a border helps to make each repeating doll distinct
  strokeWeight(73);
  line(0, -35, 0, -65); 
  stroke(randomColor); // Body
  strokeWeight(70);
  line(0, -35, 0, -65); 
  noStroke(); // Face
  fill(255);
  ellipse(0, -70, 35, 35) 
  fill(0); // Eyes
  ellipse(-6, -70, 4, 4); // Left eye
  ellipse(6, -70, 4, 4); // Right eye
  fill("red"); // Mouth
  ellipse(0, -60, 8, 8); 
  fill(randomColor2); // Apron
  ellipse(0, -25, 45, 45);
  stroke(randomColor2);
  strokeWeight(5);
  line(-32, -32, 32, -32);
  pop();
}

/* This is the rinse and repeat experiment I tried that worked as expected: 

function setup() {
  r = random(255);
  g = random(255);
  b = random(255);
  createCanvas(400, 400);
}

/*function draw() {
  background(0);
  for (var y = 32; y <= height; y += 8) {
    for (var x = 12; x <= width; x += 15) {
      ellipse(x+y, y, 16 - y/10.0, 16 - y/10.0);
    }
  }
}

You can see it here: https://editor.p5js.org/lyrictraveler/present/gFu0ce3l4
*/
