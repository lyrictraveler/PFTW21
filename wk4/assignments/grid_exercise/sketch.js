let rectX = 0;
const rectHeight = 300;
let rectY;
const rectWidth = 200
let startingX = 200;
let startingY = 100;
let myRectangles = [];
let startingId = 0;


function setup () {
    createCanvas(1000, 500);
    background(0);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, rectHeight, rectWidth);
            myRectangles.push({ x: startingX, y: startingY, id: startingId });
            startingX += 100;
            startingId++;
        }
        startingY += 100;
        startingX = 200;
    }
    
    console.log(myRectangles);
    textFont("Helvetica");
}




function mousePressed() {
    console.log('Mouse pressed', mouseX, mouseY);
    if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > 100 && mouseY < 300) {
      console.log('square has been hit');
    }
}