var slider, slider2;
var pos, pos2;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  slider = createSlider(0, 15, 0);
  slider2 = createSlider(0, 25, 0);
  
  pos = 0.0;
  
  pos2 = 0.0;
}

function draw() {
  
  clear()
  
  background('blue');
  
  fill('green');
  noStroke();
  ellipse(260, 240, 25, 10);
  
  translate(width/2, height/2)
  
  var mySinVal = sin(pos)
  var mySinVal2 = sin(pos2)
  
  //console.log(mySinVal)
  
  amplified = mySinVal * 6
  amplified2 = mySinVal2 * 7
  

  
  stroke('white')
  fill('white')
  
  for (x = 0; x <=360; x = x + 5) {
    

    
    curve(0,10, 50, amplified2, amplified, 20, 40, amplified)
    rotate(3)
  }
  
  pos = pos + slider.value()
  pos2 = pos2 + slider2.value()
}
