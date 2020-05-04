function Drop(){
  this.x = random(width);
  this.y = random(-100,-200);
  this.z = random(0,20);
  this.yspeed = random(3,7);
  
  
  
  this.show = function(){
    x = this.x;
    y = this.y;
    z = this.z;
    weight = map(z,0,20,1.5,0.5);
    strokeWeight(weight);
    // stroke(138, 43, 226);
    stroke('#ff9a02');
    line(x,y,x,y+10);
  }
  
  this.fall = function (){
    this.y = this.y + this.yspeed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 10, 2);
    }
}

}

var drops = [];
function setup() {
  

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  //fill(240);
  //d = new Drop();
  for(var i = 0; i<300; i++){
    drops[i]= new Drop();
}
}

function draw() {
    background('black')
    //background('#F8F8F8');
    //background('yellow');
  for(var i =0; i<drops.length; i++){
    drops[i].fall();
    drops[i].show();
  }
}

// function windowResized() {
//   resizeCanvas();
// }