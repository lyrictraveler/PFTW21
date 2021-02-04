/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var x = 25;
var h = 20;
var y = 25;



function setup () {
  createCanvas(480, 120);
}

function draw () {
  background(204);
  // ellipse(75, y, d, d); // left
  // ellipse(175, y, d, d); // middle
  // ellipse(275, y, d, d); // right
  // line(0, 0, width, height);
  // line(width, 0, 0, height);
  // ellipse(width/2, height/2, 60, 60);

  x = 20;
  rect(x, y, 300, h); // top
  x = x + 100;
  rect(x, y + h, 300, h); // middle
  x = x - 250;
  rect(x, y + h * 2, 300, h); // bottom
}
