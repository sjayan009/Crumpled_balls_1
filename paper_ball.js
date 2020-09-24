class Paper
{
   constructor(x, y, radius)
   {
       var options = {
           isStatic: false,
           restitution: 0.25,
           density: 1.5,
           friction: 0.5
       }

       this.body = Bodies.circle(x,y , 5, options);
       this.x = x;
       this.y = y;
       this.radius = radius;

       World.add(world, this.body);
   }

   display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    //rectMode(CENTER);
    strokeWeight(0);
    fill(255);
    ellipse(0, 0, this.radius);
    pop();
  }
};