function setup() {
  r = random(255);
  g = random(255);
  b = random(255);
  createCanvas(400, 400);
}

/*function draw() {
  background(0);
  for (var y = 32; y <= height; y += 8) {
    for (var x = 12; x <= width; x += 15) {
      ellipse(x+y, y, 16 - y/10.0, 16 - y/10.0);
    }
  }
}*/

function draw() {
  background(r,g,b);
  for (var y = 0; y <= height; y += 40) {
    for (var x = 0; x <= width; x += 90) {
      text('rinse and repeat', x, y);
    }
    if (mouseIsPressed) {
      fill (r, g, b);
      stroke (r, g, b);
    } else {
      fill (255);
    }
  }
}
