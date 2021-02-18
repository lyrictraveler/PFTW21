let bubble1;
let bubble2;


function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);

}

/* function draw() {
  background(220);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
} */

/* function draw() {
  background(100);
  
  for (let circleX = 75; circleX <= 225; circleX += 75) {
    circle(circleX, 150, 50);
  }
} */

function draw() {
  background(100);
  
  for (let circleX = 75; circleX <= 225; circleX += 75) {
    circle(circleX, 150, 50);
  }
}

class Bubble {
  constructor(x, y) {
    this.x = 200;
    this.y = 150;
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5)
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

}