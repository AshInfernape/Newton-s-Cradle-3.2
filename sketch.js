
const Engine = Matter.Engine;
const World = Matter.World;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

function setup(){

  createCanvas(800,800);

  engine = Engine.create()
  world = engine.world;

  bobObject1 = new Bob(400,400,30);
  bobObject2 = new Bob(440,400,30);
  bobObject3 = new Bob(480,400,30);
  bobObject4 = new Bob(520,400,30);
  bobObject5 = new Bob(560,400,30);
  bobObject6 = new Bob(600,400,30);

  roof = new Ground(300,200,400,20);

  rope1 = new Rope(bobObject1.body,roof.body,-50*2,0);
  rope2 = new Rope(bobObject2.body,roof.body,-25*2,0);
  rope3 = new Rope(bobObject3.body,roof.body,-0*2,0);
  rope4 = new Rope(bobObject4.body,roof.body,25*2,0);
  rope5 = new Rope(bobObject5.body,roof.body,50*2,0);
  rope6 = new Rope(bobObject6.body,roof.body,75*2,0);

  Engine.run(engine)
  }

  function draw(){
    background("#3a34e5")

   rectMode(CENTER);
   Engine.update(engine)

    bobObject1.display();
    bobObject2.display();
    bobObject3.display();
    bobObject4.display();
    bobObject5.display();
    bobObject6.display();

    roof.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    rope6.display();

    keyPressed();

    drawSprites();

  }

  function keyPressed(){
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});
    }
  }