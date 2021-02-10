// definition of variables and constants

let rectX = 0;
const rectHeight = 150;
let rectY;
const rectWidth = 150;
let clickCount = 0;
let speed;

// setup here creates the canvas and randomizes the starting position of the rectangle on the y axis and randomizes speed (although I'm not sure what the speed ranges are)

function setup () {
  createCanvas(500, 500);
  rectY = random(height - rectHeight);
  speed = random(1 , 3);
}

// in addition to setting background color, we are establishing the location of the rectangle on the X axis as a function of its speed; we are also saying that once the rectangle has passed the bounds of the canvas the loop will stop (game over); a message will appear starting at the 100,300 coordinate that announces click Count

function draw () {
  background('white');
  drawShape();
  rectX += speed;
  if(rectX > width) {
    noLoop();
    noStroke();
    fill('navy');
    textSize(28);
    textStyle(BOLDITALIC);
    text('Your score was ' + clickCount + '!', 100, 300);
}
}

// this is the shape of the target in the game

function drawShape () {
    stroke('violet');
    strokeWeight(5);
    fill('aqua');
    rect(rectX, rectY, rectWidth, rectHeight);
  }

// this is the listening event that "hears" if the user has successfully clicked within the rectangle

function mousePressed () {
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
      clickCount++;
    console.log('hit', clickCount);
  }
}
