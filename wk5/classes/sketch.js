// let bubble1;
// let bubble2; -- make a bubble array instead of listing each bubble individually

const bubbleArray = []

function setup () {
  createCanvas(600, 400);
  // bubble1 = new Bubble(200, 200, 40);
  // bubble2 = new Bubble(400, 200, 20); -- don't need these since we are creating an array instead and will populate a bubble array with a for loop
  for (let i = 0; i < 6; i++) {
    const bubble = new Bubble(400, 200, 20);
    bubbleArray.push(bubble);
  }
// a loop with 6 bubbles in the array has been created
}

function draw () {
  background(0);

  for (let circleX = 0; circleX <= 6; circleX++) {
    circle(circleX, 75, 50); // trying to follow Happy Coding example
    bubbleArray[circleX].move(); // getting an error message that this is undefined?
    bubbleArray[circleX].show();
  }
}

class Bubble {
  constructor (tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.show();
    this.move();
  }

  move () {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5)
  }

  show () {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}
