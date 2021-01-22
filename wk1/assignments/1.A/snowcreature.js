let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "purple");
let stroke2 = prompt("enter another basic color in lowercase", "red");

function setup() {
  createCanvas(1000, 800);
  background("#ccc");
}

function draw() {
  //wallpaper
  stroke(192);
  fill(157);
  rect(0, 0, 100, 1000);
  rect(200, 0, 100, 1000);
  rect(400, 0, 100, 1000);
  rect(600, 0, 100, 1000);

  //mirror
  fill("#f1f1f1");
  stroke("#00FFFF");
  strokeWeight(20);
  ellipse(200, 300, 400, 600);

  //skirt
  fill("#fff");
  stroke(stroke2);
  strokeWeight(10);
  ellipse(350, 700, 400, 400);

  //torso
  fill("#fff");
  stroke(stroke2);
  strokeWeight(10);
  ellipse(350, 500, 250, 300);

  //head
  fill("#fff");
  stroke("#000");
  strokeWeight(5);
  ellipse(325, 300, 200);

  //hat brim
  fill(stroke1);
  stroke(stroke1);
  strokeWeight(50);
  ellipse(325, 270, 350, 50);

  //hat crown
  fill(stroke1);
  stroke(stroke1);
  strokeWeight(50);
  ellipse(325, 200, 200, 50);

  //arms
  stroke("#000");
  strokeWeight(10);
  strokeCap(ROUND);
  line(100, 325, 270, 450);
  line(100, 325, 270, 150);
  line(450, 425, 500, 400);
  line(500, 400, 500, 300);

  //arcs
  noFill();
  stroke("green");
  arc(450, 150, 100, 50, 180, PI, OPEN);

  stroke("green");
  arc(450, 250, 200, 50, 180, PI, OPEN);

  noFill();
  stroke("blue");
  arc(450, 200, 150, 50, 180, PI, OPEN);

  //

  //flower

  //wallpaper
}
