// I was inspired by this artist's design: https://editor.p5js.org/hyershin/sketches/SkG_S5K3W

var angle = 5.0;
var offset = 150;
var scalar = 5.5; // I don't understand what this variable is about. 
var speed = 0.1;

function setup() { 
  createCanvas(200, 300);
  noStroke();
  background (0);
} 

function draw() { 

  var x = offset + cos(angle) * scalar; // please explain what this is doing
  var y = offset + sin(angle) * scalar;  // please explain what this is doing
  fill('aqua');
  noStroke();
  ellipse(x, y, 5, 5);
  angle += speed;
  scalar += speed;
  
}