function setup() {
  createCanvas(720, 400);
  background(255); 
  strokeWeight(3);
}

function draw() { 
  if (mouseIsPressed) {
  stroke(230);
} else {
  stroke(215, 53, 103);
}
line(mouseX - 66, mouseY, mouseX + 66, mouseY);
line(mouseX - mouseY - 66, mouseX, mouseY + 66)
}

