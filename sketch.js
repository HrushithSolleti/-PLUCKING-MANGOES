
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, treeImage;
var ground1;
var stone1;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5, mango6,mango7,mango8,mango9;
var chain1;

function preload()
{
	treeImage=loadImage("tree.png");
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	tree = createSprite(900,460);
	tree.addImage(treeImage);
	tree.scale=0.4;
	
	boy = createSprite(110,640);
	boy.addImage(boyImage);
	boy.scale=0.1;

	//Create the Bodies Here.

	ground1=new Ground(600,730,1200,70);
	
	stone1=new Stone(60,300,30);

	mango1=new Mango(820,430,22);
	mango2=new Mango(910,290,22);
  mango3=new Mango(850,390,22);
	mango4=new Mango(930,320,22);
	mango5=new Mango(950,410,22);
	mango6=new Mango(900,350,22);
	mango7=new Mango(1000,370,22);
	mango8=new Mango(1070,350,22);
	mango9=new Mango(770,330,22);

	chain1=new Chain(stone1.body,{x:60,y:600})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();

  ground1.display();

  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
  detectcollision(stone1,mango9);
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  chain1.fly()
}

function detectcollision(lstone,lmango)
{
   mangoBodyPosition=lmango.body.position
   stoneBodyPosition=lstone.body.position

   var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
   {
      Matter.Body.setStatic(lmango.body,false);
   }  
}

function keyPressed() 
{
   if(keyCode === 32)
   {
     Matter.Body.setPosition(stone1.body, {x:60,y:300})
     chain1.attach(stone1.body);
   }
}