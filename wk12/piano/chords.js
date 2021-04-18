// I found videos 8.2, 8.3, and 8.4 of CodeTrain to be particularly helpful.

var doe;
var ray;
var me;
var far;
var sew;

let button1;
let button2;
let button3;
let button4;
let button5;

function preload () {
  doe = loadSound('library/442980__pacway__do-c.m4a');
  ray = loadSound('library/442983__pacway__re-d.m4a');
  me = loadSound('library/442977__pacway__mi-e.m4a');
  far = loadSound('library/442979__pacway__fa-f.m4a');
  sew = loadSound('library/442981__pacway__sol-g.m4a');
}

// I probably could have used a for loop here to position the buttons, but I wasn't sure how to integrate that with designated colors.
function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.position(500, 200); //relative to the page
  button1 = createButton('Do');
  button1.position(600, 200); //relative to canvas
  button1.size(200, 100);
  button1.style('font-size', '18px');
  button1.style('background-color', 'red');
  button1.mousePressed(playDo);
  button2 = createButton('Re');
  button2.position(600, 330);
  button2.size(200, 100);
  button2.style('font-size', '18px');
  button2.style('background-color', 'orange');
  button2.mousePressed(playRe);
  button3 = createButton('Mi');
  button3.position(600, 460);
  button3.size(200, 100);
  button3.style('font-size', '18px');
  button3.style('background-color', 'yellow');
  button3.mousePressed(playMi);
  button4 = createButton('Fa');
  button4.position(600, 590);
  button4.size(200, 100);
  button4.style('font-size', '18px');
  button4.style('background-color', 'green');
  button4.mousePressed(playFa);
  button5 = createButton('Sol');
  button5.position(600, 720);
  button5.size(200, 100);
  button5.style('font-size', '18px');
  button5.style('background-color', 'violet');
  button5.mousePressed(playSol);
}

function draw() {
  background('blue');
  fill(255, 0, 0);
}
function playDo () {
    doe.play();
}

function playRe () {
    ray.play();
}

function playMi () {
    me.play();
}

function playFa () {
    far.play();
}

function playSol () {
    sew.play();
}
