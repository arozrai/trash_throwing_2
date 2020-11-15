
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(580,650,125,10)
	box2 = new Box(630,600,10,100)
	box3 = new Box(525,600,10,100)

	ground1 = new Ground(400,675,800,30)
	
	ball1 = new Ball(100,100,40)

	bin1 = new Bin(500,510,150,150)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  box1.display()
  box2.display()
  box3.display()

  ground1.display()

  bin1.display()
  
  ball1.display()
  //keyPressed()
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-35})
	}
}

