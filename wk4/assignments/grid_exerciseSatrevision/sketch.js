let rectX = 0;
const rectHeight = 300;
let rectY;
const rectWidth = 200;
let startingX = 200; 
let currentY = 100; 
let myRectangles = [];
let startingId = 0; // what is this? 


function setup () {
    createCanvas(1300, 1500);
    background(0);
    fill('aqua');
  // every time I tried to add a 3rd loop, the editor froze
  // I don't understand what is going on with these loops? 
    for (let rows = 0; rows < 4; rows++) {
        for (let cols = 0; cols < 4; cols++) { 
            rect(startingX, currentY, rectWidth, rectHeight);
            myRectangles.push({ x: startingX, y: currentY, id: startingId });
            startingX += 225;
            startingId++;
        }
        currentY += 325;
        startingX = 200;
    }
    
    console.log(myRectangles);
    textFont("Helvetica");
}

/*function draw() {
  background('aqua');
  fill(255, 0, 255, 160);
  ellipse(100, 100, 200, 200);
  fill(0, 255, 0, 160);
  ellipse(228, 225, 200, 200);
  fill(0, 0, 255, 160);
  ellipse(68, 250, 200, 200);
  fill('navy');
  textSize(32);
  text("MEMORY!", 25, 100);
}*/


function mousePressed() {
    console.log('Mouse pressed', mouseX, mouseY);
    if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > 100 && mouseY < 300) {
      console.log('square has been hit');
    }
}