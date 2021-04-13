// This was initially based on a halftone dot exercise in Make. I wanted to make repeating stars in a night sky, but when I added the timed feature (or when I added the star), that kind of repetition disappeared :-( The star might be flickering, but that could be my astignmatism. In any case, there are not multiple stars and I do not understand why. 

var time1 = 2000;
var time2 = 4000;
var x = 0;

function setup() {
  createCanvas(400, 400);
  background("midnightblue");
}

function draw() {
  var currentTime = millis();
  if (currentTime > time2) {
    for (var y = 0; y <= height; y += 5) {
      for (var x = 0; x <= width; x += 90) {
        background("midnightblue");
        fill("yellow");
        star(50, 50, 60, 15, 35, 5);
      }
    }
  } else if (currentTime > time1) {
    //background("midnightblue");
  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}