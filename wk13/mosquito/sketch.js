/*
I started by working with one of Allison Parish's exercises on timed events and then combined it with a modified version of the Jitterbug exercise from our Make text. 
*/

// declare two flies
var fly1;
var fly2;

// declare starting positions for various bugs
let xpos = 200;
let ypos = 200;

function preload() {
  buzz = loadSound('library/mosquito.wav');
}

// create background and establish flies hiding in background, start annoying noise
function setup() {
  createCanvas(600, 600);
  background(204);
  fly1 = new Insect(width * 0.33, height / 2, 50);
  fly2 = new Insect(width / 2, height / 2, 20);
  buzz.play();
}


function draw() {
  
// pressing mouse reveals flies in background

  if (mouseIsPressed) {
    background(112, 128, 144); {
      fill('white');
      stroke(154, 205, 50);
      strokeWeight(8);
    }
    fly1.move();
    fly1.display();
    fly2.move();
    fly2.display();

// default condition is midnight blue 

  } else {
    background('midnightblue'); {
      fill('black');
      stroke('black');
    }
  }
  
// and mosquito hard to see
  xpos += random(-6, 6);
  ypos += random(-6, 6);
  stroke('black');
  ellipse(xpos, ypos, sin(frameCount / 200), 4);
}

// pressing mouse also stops buzz

function mousePressed() {
  buzz.stop();
}

function mouseReleased() {
  buzz.loop();
}