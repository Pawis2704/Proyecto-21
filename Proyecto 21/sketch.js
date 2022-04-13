
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 100;
var world;
var engine;
var desu;
var suiz;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_opti = {
		isStatic: false,
		restitution: 0.7,
		friction: 0,
		density: 1.5
	};

	var ball = Bodies.circle(260, 100, radius/2, ball_opti);
	World.add(world, ball);

	var suu = new Ground(width/2, 600, width, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("papayawhip");
  
  ellipse(ball.position.x, ball.position.y, radius, radius);

  suu.display();
  drawSprites();
 
}



