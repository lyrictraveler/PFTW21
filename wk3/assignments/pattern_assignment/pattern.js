/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function setup () {
  createCanvas(600, 600);
}

function createTile (
  originX,
  originY,
  baseColor,
  triangleColor,
  lineColor,
  xColor,
  toplineColor
) {
  translate(originX, originY);

  // base of tile

  fill(baseColor);
  rect(0, 0, 200, 200);

  // triangles
  noStroke();
  fill(triangleColor);
  triangle(100, 140, 160, 200, 40, 200);
  triangle(100, 60, 40, 0, 160, 0);
  triangle(0, 40, 60, 100, 0, 160);
  triangle(140, 100, 200, 160, 200, 40);

  // fine lines under X = "#829FD9"
  stroke(lineColor);
  strokeWeight(1);
  line(0, 60, 140, 200);
  line(0, 140, 140, 0);
  line(60, 0, 200, 140);
  line(60, 200, 200, 60);

  // X shape
  stroke(xColor);
  strokeWeight(20);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);

  // fine lines in X
  stroke(toplineColor);
  strokeWeight(1);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
}

function draw () {
  createTile(0, 0, "#230A59", "#0029FA", "#829FD9", "#3E38F2", "#829FD9");
  createTile(0, 200, "#230A59", "#0029FA", "#829FD9", "#5c73f2", "#230A59");
  createTile(0, 200, "#230A59", "#0029FA", "#829FD9", "#3E38F2", "#829FD9");
  createTile(200, -400, "#230A59", "#0029FA", "#829FD9", "#5c73f2", "#230A59");
  createTile(0, 200, "#230A59", "#0029FA", "#829FD9", "#3E38F2", "#829FD9");
  createTile(0, 200, "#230A59", "#0029FA", "#829FD9", "#5c73f2", "#230A59");
  createTile(200, -400, "#230A59", "#0029FA", "#829FD9", "#3E38F2", "#829FD9");
  createTile(0, 200,"#230A59", "#0029FA", "#829FD9", "#5c73f2", "#230A59");
  createTile(0, 200, "#230A59", "#0029FA", "#829FD9", "#3E38F2", "#829FD9");
}
