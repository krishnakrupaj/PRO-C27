const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var rope1,rope2,rope3,rope4,rope5
var roof


function preload()
{
	
}

function setup() {
	createCanvas(700,500);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Ground(width/2,100,370,20);
	
	bob1 = new Bob(260-50);
	bob2 = new Bob(330-50);
	bob3 = new Bob(400-50);
	bob4 = new Bob(470-50);
	bob5 = new Bob(540-50);	
	
	rope1 = new Rope(bob1.body,roof.body,-140);
	rope2 = new Rope(bob2.body,roof.body,-70);
	rope3 = new Rope(bob3.body,roof.body,0);
	rope4 = new Rope(bob4.body,roof.body,+70);
	rope5 = new Rope(bob5.body,roof.body,+140);
	Engine.run(engine)
  
}


function draw() {
	
Engine.update(engine)	
rectMode(CENTER);
background("black");

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

noStroke()

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display(); 

 noStroke()
  fill("aqua");
    textSize(50);
    textFont("Times New Roman");
    text("NEWTON'S CRADLE",125, 60);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-150 ,y:-150 })
	}
}




