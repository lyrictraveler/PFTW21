// I believe that I've followed the video instructions exactly, but nothing at all is showing up. Would love to hear ideas about where I went wrong. I don't want to experiment further until I can get the text example to work. 

var level;
var mySound;
var circleX = 250
var circleY = 250

function preload() {
  mySound = loadSound('07003016.wav');
}

function setup() {
  createCanvas(500, 500)
  background('midnightblue');
  mySound.setVolume(0.1);
  mySound.play();
}

function draw() {

  level = mySound.getLevel();

  var diameterX = level = 2500
  var diameterY = level = 2500 = random(1.5)

  ellipse(circleX, circleY, diameterX, diameterY)
}