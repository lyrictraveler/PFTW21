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
 // button = createButton("play");
 // button.mousePressed(togglePlaying);
  //background("midnightblue");
}

function draw () {
  background('midnightblue');
  song.setVolume(slider.value());
}

/* function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.1);
    button.html("pause");
  } else {
    button.html("play");
  }
} */