let color1 = prompt('enter a basic color name in lowercase', 'fuchsia');
let color2 = prompt('enter another basic color name in lowercase', 'cyan');
//I wanted to make a way to have user enter numbers, but couldn't follow the directions on converting strings to numbers: https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/



function setup() {
  createCanvas(500, 500);
  background("silver");
}

function nestingdoll(x, y, s) {
  push();
  translate(x, height / 1.3); // trying to follow the rule of thirds for placement here 
  scale(s); // Set the scale
  stroke("white"); // creating a border helps to make each repeating doll distinct
  strokeWeight(73);
  line(0, -35, 0, -65); 
  stroke(color1); // Body
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
  fill(color2); // Apron
  ellipse(0, -25, 45, 45);
  stroke(color2);
  strokeWeight(5);
  line(-32, -32, 32, -32);
  pop();
}

function draw() {
  background("black");
  randomSeed(0);
  // loop here is set so the dolls don't run off the edge
  for (var i = 25; i <= width -40; i += 40) { 
    var scalar = random(0.15, 2)
    nestingdoll(i, 110, scalar)
  }

 
}
