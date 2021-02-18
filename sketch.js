const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;

var ground,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground_options={
    isStatic:true,
  }
  ground=Bodies.rectangle(200,390,800,10,ground_options)
  World.add(world,ground)
  ball_options={
    restitution:1,
  }
  ball=Bodies.circle(300,100,30,ball_options)
  World.add(world,ball)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}