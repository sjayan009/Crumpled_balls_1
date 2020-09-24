
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  bottomgreenSprite = createSprite(400,650,800,30);
  bottomgreenSprite.shapeColor = "brown";
  
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
	bottomgreenBody = Bodies.rectangle(0, 635, 1600, 20, {isStatic:true} );
	World.add(world, bottomgreenBody);

  paper_ball1 =  new Paper(75,50,30);
  Engine.run(engine);
  
  Bottom_one_level = new Box(500,420,220,20);
  left_one_level = new Box(400,380,20,100);
  right_one_level = new Box(600,380,20,100);  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  
  drawSprites();
  space_key();

  paper_ball1.display();

  left_one_level.display();
  right_one_level.display();
  Bottom_one_level.display();
 
}

function space_key()
{
  if(keyDown("space"))
  {
    Matter.Body.applyForce(paper_ball1.body, paper_ball1.body.position, {x:2.15,y:-3.15});
  }
}