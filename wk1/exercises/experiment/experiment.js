let grid = undefined;
//let stroke1 = prompt('enter a basic color name in lowercase', 'purple');
//let stroke2 = prompt("enter another basic color in lowercase", "red");

function setup() {
  createCanvas(1000, 800);
  background(204);
  grid = loadImage('./img/100px_grid.png');
  angleMode(DEGREES);
}

function draw() {
  background(grid);
  //line(20,50,480,110);
  //point(240,60);

  // rectangle
  //stroke('red');
  //quad(158,55,199,14,392,66,351,107);

  // arc

  //arc(90, 60, 80, 80, 0, HALF_PI);
  //arc(190, 60, 80, 80, 0, PI+HALF_PI);
  //arc(290, 60, 80, 80, PI, TWO_PI+HALF_PI);
  //arc(390, 60, 80, 80, QUARTER_PI, PI + QUARTER_PI);

  //arcs with angleMode

  arc(90, 160, 80, 80, 0, 90);
  arc(190, 160, 80, 80, 0, 270);
  arc(290, 160, 80, 80, 180, 450);
  arc(390, 160, 80, 80, 45, 225);
}
