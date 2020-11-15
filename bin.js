class Bin {
  constructor(x, y, width,height) {
    var options = {
        isStatic:true
    }
    this.body = Matter.Bodies.rectangle(x, y, width/3,height/3, options);
    this.width = width
    this.height = height
    this.bin=loadImage("dustbinX.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    imageMode(RADIUS);
    image(this.bin, pos.x,pos.y, this.width,this.height);
    pop();
  }
};