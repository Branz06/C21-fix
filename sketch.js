
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var radius = 40
var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	//Create the Bodies Here.
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
	ball = Bodies.circle(260,100,radius/2,ball_options);
    World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  drawSprites();
  ellipse(ball.position.x,ball.position.y,radius,radius);
  rightSide.display();

}

function keypressed(){
	if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
	}
}


