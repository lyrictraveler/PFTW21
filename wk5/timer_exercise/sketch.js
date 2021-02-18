// TIMERS
let color;
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 10;
const distance = 2;

function setup () {
  createCanvas(400, 400);
  background(0);
}

function drawBlock (x, y, color) {
  fill(color || 255);
  rect(x, y, 50, 50);
}

function keyTyped() {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber; 

// It would be fun to figure out how to generate random colors.

/*   col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
  background(col.r,col.g,col.b);
  print('A new color was made!'); */
} 

window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
    // console.log('hi'); // why? why are we saying 'hi'?
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY - 50 > height && blockX - 50 > width) {
      // cancels timer
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);
