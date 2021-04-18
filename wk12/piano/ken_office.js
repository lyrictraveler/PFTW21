// Thanks to The Coding Train! https://www.youtube.com/watch?v=Pn1g1wjxl_0

let button1;
let button2;
let button3;
let button4;
let button5;

//var song;

function preload () {
  // song = loadSound('library/07003016.wav');
  // eslint-disable-next-line no-undef
  doe = loadSound('library/442980__pacway__do-c.m4a');
  ray = loadSound('library/442983__pacway__re-d.m4a');
  me = loadSound('library/442977__pacway__mi-e.m4a');
  far = loadSound('library/442979__pacway__fa-f.m4a');
  sew = loadSound('library/442981__pacway__sol-g.m4a');
}

/* function setup () {
  createCanvas(500, 500);
  slider = createSlider(0, 1, 0.5, 0.01);

} */

/* function draw () {
  background('black');
  doe.setVolume(slider.value());
} */

// one mousePressed, use if statements to define bounds of each button

function setup () {
  canvas = createCanvas(1000, 1000);
  canvas.position(0, 100); // relative to the page
  // h1 = createElement('h1', 'Waiting')
  // h1.position(200, 300);
  button1 = createButton('Do');
  button1.position(100, 200);
  button1.size(200, 100);
  button1.mousePressed(changeBG);
  button2 = createButton('Re');
  button2.position(100, 330);
  button2.size(200, 100);
  button2.mousePressed();
  button3 = createButton('Mi');
  button3.position(100, 460);
  button3.size(200, 100);
  button3.mousePressed();
  button4 = createButton('Fa');
  button4.position(100, 590);
  button4.size(200, 100);
  button4.mousePressed();
  button5 = createButton('Sol');
  button5.position(100, 720);
  button5.size(200, 100);
  button5.mousePressed();
}

function draw () {
  //clear();
  background('blue');
/*   fill(255, 0, 0);
   rect(100, 100, 50, 50); //relative to the canvas itself 
  rect(x, y, 50, 50);
  h1.position(x, y); // HTML elements are relative to the page
  x = x + random(-5, 5); */
}

/* function mousePressed() {
  createP("My favorite number is " + random(0,10));
} */

/* function mousePressed() {
  if(mouseX < width/2) {
    doe.play()
  } if(mouseX > width/2) {
    ray.play()
  }
}

function changeBG() {
  let val = random(255);
  background(val);
} */
