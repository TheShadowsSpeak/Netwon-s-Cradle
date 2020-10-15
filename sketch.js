
var roof;
var rope1,rope2,rope3, rope4,rope5;
var bob1, bob2,bob3,bob4,bob5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
  roof = new Roof(400,100, 700, 100);
  bob1 = new Bob(130, 500,125);
  bob2 = new Bob(260,500,125);
  bob3 = new Bob(390,500,125);
  bob4 = new Bob(520,500,125);
  bob5 = new Bob(650,500,125);
  rope1 =new rope(bob1.body,{x:120, y:110},120,110);
  rope2 =new rope(bob2.body,{x:240, y:110},240,110 );
  rope3 =new rope(bob3.body,{x:360, y:110},360,110);
  rope4 =new rope(bob4.body, {x:480, y:110},480, 110);
  rope5 =new rope(bob5.body,{x:600, y:110},600,110 );
  
}


function draw() {
  rectMode(CENTER);
  background("#0B198A");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



