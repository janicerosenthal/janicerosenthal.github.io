Rocket rocket = new Rocket(500,500,0,0,0,0);

function setup()
{
  createCanvas(1024,1024);
}

function draw()
{
  background(255);
  rocket.update();
  rocket.display();
}

class Rocket {
 PVector pos;
 PVector vel;
 PVector acc;
 
 Rocket (x, y, vx, vy, ax, ay) {
  pos = new PVector(x,y);
  vel = new PVector(vx,vy);
  acc = new PVector(ax,ay);
 }
 
 function display()
 {
   fill(255,0,0);
   noStroke();
   ellipse(pos.x,pos.y,20,20);
 }
 
 function update()
 {
   if(mousePressed)
   {
    acc = new PVector(mouseX,mouseY).sub(pos);
    acc.normalize();
    acc.setMag(0.2);
   }
   else
   {
    acc.setMag(0);
   }
   vel.add(acc);
   vel.limit(3);
   println(vel.mag());
   pos.add(vel);
 }
 
 
 
}