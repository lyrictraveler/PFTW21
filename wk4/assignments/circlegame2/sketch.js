// Setting up condition for movement across canvas


let x;
let y;
let xspeed;
let yspeed;
let clickCount = 0;
let ellipseWidth = 75; // we'll use this to detect when the right side of the circle is out of bounds

function setup() {
  createCanvas(1000, 1000);
  x = width / 2
  y = height / 2
  xspeed = 1; 
 // xspeed = -1; wh - when I change this from -1 to 1 and make the rightSide change below, it breaks???
  
  yspeed = 0.5 * xspeed;
}

function draw() { // 1 = draw function
  background('white');
  ellipse(x, y, ellipseWidth);
  x += xspeed;
  y += yspeed;

  // Draw a circle
  stroke('violet');
  strokeWeight(5);
  fill('aqua');
  //ellipse(x, y, 25, 25);
  
  // to figure out left side of circle -- it will be x minus half the circle
  // if we wanted right side it would be the same but plus x
  const leftSide = x - (ellipseWidth / 2);
  const rightSide = x + (ellipseWidth / 2);
  console.log('left side', leftSide );
  // the left side of your canvas is 0, the right side is 1000 but you were right when you referred to it as `width`
  // since my circle is now moving right, I'm using greater than (or equal to) width
  // if my circle was moving left to 0, I'd use a less than (or equal to) zero

  // you can use (rightSide < 0) to check if the right side was off (the whole circle was off the left side)
  // if you had a positive xspeed, you would then use (rightSide <= width) - wh - when I make this change to rightSide because I changed from -1 to 1 above, it seems to break again? 
  if (rightSide <= width) {
  // announce the count
  noLoop();
  fill: ('black')
  textSize(28);
  textStyle(BOLDITALIC);
  text('Your score was ' + clickCount + '!', 100, 300);
}

}


// not the right condition, but what is??? how detect ellipse moving outside of canvas? 



// click the mouse
// this should not be in defined in draw function b/c p5 libs won't be able to 'find' it
function mousePressed() {
  var d = dist(mouseX, mouseY, x, y)
  console.log('pressed', d);
  // 3 = if condition, but why aren't clicks being detected
  if (d < (75 / 2)) {
    clickCount++;
    console.log('hit', clickCount);
  }
}