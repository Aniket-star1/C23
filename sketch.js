const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground1,box1,box2;


function setup() {
  createCanvas(420,420);
  //createSprite(400, 200, 50, 50);
  /*var ball_options={
    restitution:3
  }
var ground_options={
  isStatic:true
}*/
engine = Engine.create();
world=engine.world;
//ball= Bodies.circle(200,200,20,ball_options)
//World.add(world,ball);
//ground= Bodies.rectangle(200,380,400,20,ground_options);
//World.add(world,ground);
box1 = new box(200,300,50,50)
box2 = new box(240,100,50,100)
ground1 = new ground(200,420,420,10)
}

function draw() {
  background("black");  
  Engine.update(engine);
  /*ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)*/
  box1.display();
  box2.display();
  ground1.display();
}