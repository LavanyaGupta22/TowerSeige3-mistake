const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World= Matter.World;
const Constraint = Matter.Constraint;

var engine, world; 
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;
var ball, polygon_img;
var slingshot;

function preload(){
polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20); 
  stand1 = new Ground(390,300,220,10);
  var options = {
    'density':4
  }
  ball = Bodies.circle(50,200,20,options);
  World.add(world,ball);

  slingshot = new SlingShot(ball,{x:60, y:200});

  //level one
  box1= new Box(300,275,30,50);
  box2= new Box(330,275,30,50);
  box3= new Box(360,275,30,50);
  box4= new Box(390,275,30,50);
  box5=new Box(420,275,30,50);
  box6= new Box(450,275,30,50);
  box7= new Box(480,275,30,50);

  //level two
  box8= new Box(330,235,30,50);
  box9= new Box(360,235,30,50);
  box10= new Box(390,235,30,50);
  box11= new Box(420,235,30,50);
  box12= new Box(450,235,30,50);

  //level three
  box13= new Box(360,195,30,50);
  box14=new Box(390,195,30,50);
  box15= new Box(420,195,30,50);

  //top
  box16= new Box(390,155,30,50); 

}

function draw() {
  background(0); 
  
Engine.update(engine);
 
  ground.display();
  stand1.display();

  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,50,50);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === "SPACE"){
      slingShot.attach(this.polygon);
  }
}

  