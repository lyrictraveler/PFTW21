// Thanks to The Coding Train! https://www.youtube.com/watch?v=Pn1g1wjxl_0

var song;
var button;

function preload () {
  song = loadSound('library/07003016.wav');
}

function setup () {
  createCanvas(500, 500);
  slider = createSlider(0, 1, 0.5, 0.01);
  song.play();
}

function draw () {
  background('black');
  song.setVolume(slider.value());
}
