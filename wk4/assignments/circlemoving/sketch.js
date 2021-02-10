// Setting up condition for movement across canvas


let x; 
let y; 
let xspeed; 
let yspeed; 

function setup() { 
  createCanvas(500, 500);
  x = width/2
  y = height/2
  xspeed = -1; 
  yspeed = 0.5*xspeed; 
}

function draw() {                              // 1 = draw function
  background('white');
  ellipse(x, y, 75); 
  x+=xspeed; 
  y+=yspeed; 
  
  // Draw a circle
  stroke('violet');
  strokeWeight(5);
  fill('aqua');
  //ellipse(x, y, 25, 25);
  
 var d = dist(mouseX, mouseY, x, y)
  

 // not the right condition, but what is??? how detect ellipse moving outside of canvas? 
    if(rect > width) {   
        // announce the count
    noLoop();
    textSize(28);
    textStyle(BOLDITALIC);
    text('Your score was ' + clickCount + '!', 100, 300);
}
  
  // click the mouse
  function mousePressed () {       
    
    // 3 = if condition, but why aren't clicks being detected
  if (d < radius) {                            
      clickCount++;
    console.log('hit', clickCount);
  }
}
}