class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.2
      }
      this.body = Matter.Bodies.circle(x, y, radius, options);
      this.radius = radius
      this.x=x
      this.y=y
      this.trash=loadImage("oofed paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(RADIUS);
      image(this.trash, 0, 0, this.radius, this.radius);
      pop();
    }
  };