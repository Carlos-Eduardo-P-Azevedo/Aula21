
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var bloco1, bloco2, bloco3;
var solo;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var bloco1_options={
		restitution: 0.5,
		frictionAir: 0,
		friction: 1
	}

	var bloco2_options={
		restitution: 0.7,
		frictionAir: 0.1,
		friction: 0.01
	}

	var bloco3_options={
		restitution: 0.01,
		frictionAir: 0.3,
		friction: 1
	}

	var solo_options={
		isStatic: true
	}

    bola = Matter.Bodies.circle(100,100,20,20);
	World.add(world,bola);

	bloco1 = Matter.Bodies.rectangle(400,100,50,50,bloco1_options);
	World.add(world,bloco1);

	bloco2 = Matter.Bodies.rectangle(350,350,100,50,bloco2_options);
	World.add(world,bloco2);

	bloco3 = Matter.Bodies.rectangle(0,50,100,200);
	World.add(world,bloco3);

    solo = Bodies.rectangle(400,670,800,50,solo_options);
    World.add(world,solo);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ellipse(bola.position.x,bola.position.y,30);
  rect(bloco1.position.x,bloco1.position.y,50,50);
  rect(bloco2.position.x,bloco2.position.y,100,50);
  rect(bloco3.position.x,bloco3.position.y,100,200);
  rect(solo.position.x,solo.position.y,800,50);
}



