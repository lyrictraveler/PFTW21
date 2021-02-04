function setup() {
  // eslint-disable-next-line no-undef
  createCanvas(480, 120);
  fill(255);
  stroke(102);
}

// eslint-disable-next-line no-unused-vars
function draw() {
  background(0);
  // // line(20, 40, 80, 80);
  //line(80, 40, 140, 80);
  //line(140, 40, 200, 80);
  //line(200, 40, 260, 80);

  //for (var i = 20; i < 400; i += 20) {
  //line(i, 0, i + i/2, 80);
  //line(i + i/2, 80, i*1.2, 120)

  // for (var y = 0; y <= height; y += 40) {
  // for (var x = 0; x <= width; x += 40) {
  // fill(255, 140);
  // ellipse(x, y, 40, 40);
  //   }
  //}
  //}
  // for (var y = 0; y < height + 45; y += 40) {
  //  fill(255, 140);
  //ellipse(0, y, 40, 40);
  //}

  // for (var x = 0; x < width + 45; x += 40) {
  //  fill(250, 140);
  //   ellipse(x, 0, 40, 40);
  //  }
  for (var y = 20; y <= height - 20; y += 10) {
    for (var x = 20; x <= width - 20; x += 10) {
      ellipse(x, y, 4, 4);
      // draw a line to center of display
      line(x, y, 240, 60);
    }
  }
}
