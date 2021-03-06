const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject;
var world;
var bgImg;

function preload(){
bgImg = loadImage("park.jpg")

}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20); 
  dustbinObj=new dustbin(1200,650);

	Engine.run(engine);  
}


function draw() {
  background(bgImg)
  rectMode(CENTER);

  groundObject.display();
  paperObject.display();
  dustbinObj.display();

  stroke("black");
  fill("Black");
  textSize(20);
  text("USE ME",1160,465);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:31,y:-46});
  }
}