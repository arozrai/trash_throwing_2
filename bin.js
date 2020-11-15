class Bin {
  constructor(x, y, radius) {
    var options = {
        isStatic:true
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.radius = radius
    this.x=x
    this.y=y
    this.bin=loadImage("dustbinX.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(RADIUS);
    image(this.bin, 0, 0, 220,220);
    pop();
  }
};