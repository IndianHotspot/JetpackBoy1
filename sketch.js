
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var jetPack, jetPackImg;
var scenery;
var plane, planeImg, plane2, planeImg2;
var backgroundImg;

function preload()
{
	planeImg = loadImage("sprites/planeImg.png")
	planeImg2 = loadImage("sprites/planeImg2.png")
	backgroundImg = loadImage("sprites/Background.jpg")

}

function setup() {
	createCanvas(800, 700);

 scenery = createSprite(width/2, height/2, 800, 20)
 scenery.scale = 0.44;

 plane = createSprite(750, 350, 50,50);

 plane2 = createSprite(50, 500, 50,50);



plane.addImage(planeImg)
plane.scale = 0.2

plane2.addImage(planeImg2)
plane2.scale = 0.2

scenery.addImage(backgroundImg)
scenery.velocityY = -3


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  if(scenery. y<0){

	scenery.y = scenery.height/2;
  }
  drawSprites();
 
}



