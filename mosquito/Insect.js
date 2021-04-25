/* Putting the constructor in a separate file just makes it easier to see / work with everything; just remember to put link in the index.html file! */


function Insect(tempX, tempY, tempDiameter) {
  
  this.xpos = tempX;
  this.ypos = tempY;

  
  this.diameter = tempDiameter;
  this.speed = 2.5;
  this.sin = sin(frameCount/200);
  
  this.move = function() {
    this.xpos += random (-this.speed, this.speed);
    this.ypos += random (-this.speed, this.speed);
  };
  
  this.display = function() {
    ellipse(this.xpos, this.ypos, this.sin+2, this.sin+4);
  };
}