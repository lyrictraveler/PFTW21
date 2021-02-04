function setup() {
    createCanvas(200, 200);
  }
  
  function createTile() {
    translate(0, 0);
  
    // base of tile
    fill("#230A59");
    rect(0, 0, 200, 200);
  
    // triangles
    noStroke();
    fill("#0029FA");
    triangle(100, 140, 160, 200, 40, 200);
    triangle(100, 60, 40, 0, 160, 0);
    triangle(0, 40, 60, 100, 0, 160);
    triangle(140, 100, 200, 160, 200, 40);
  
    // fine lines under X
    stroke("#829FD9");
    strokeWeight(1);
    line(0, 60, 140, 200);
    line(0, 140, 140, 0);
    line(60, 0, 200, 140);
    line(60, 200, 200, 60);
  
    // X shape
    stroke("#3E38F2");
    strokeWeight(20);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
  
    // fine lines in X
    stroke("#829FD9");
    strokeWeight(1);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
  
    // Use noLoop() function
    noLoop();
  }
  
  function draw() {
    createTile();
  }