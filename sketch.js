const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var stand1, stand2;

var polygon, polygonImg;

var slingShot;

var score;

var bg;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  stand1 = new Stand(490,570,315,10);
  stand2 = new Stand(940,370,315,10);

	Box1 = new Box(370, 535, 40, 60);
	Box2 = new Box(410, 535, 40, 60);
	Box3 = new Box(450, 535, 40, 60);
	Box4 = new Box(490, 535, 40, 60);
	Box5 = new Box(530, 535, 40, 60);
	Box6 = new Box(570, 535, 40, 60);
	Box7 = new Box(610, 535, 40, 60);
	Box8 = new Box(410, 475, 40, 60);
	Box9 = new Box(450, 475, 40, 60);
	Box10 = new Box(490, 475, 40, 60);
	Box11 = new Box(530, 475, 40, 60);
	Box12 = new Box(570, 475, 40, 60);
	Box13 = new Box(450, 415, 40, 60);
	Box14 = new Box(490, 415, 40, 60);
	Box15 = new Box(530, 415, 40, 60);
	Box16 = new Box(490, 355, 40, 60);

	Box17 = new Box(860, 335, 40, 60);
	Box18 = new Box(900, 335, 40, 60);
	Box19 = new Box(940, 335, 40, 60);
	Box20 = new Box(980, 335, 40, 60);
	Box21 = new Box(1020, 335, 40, 60);
	Box22 = new Box(900, 275, 40, 60);
	Box23 = new Box(940, 275, 40, 60);
	Box24 = new Box(980, 275, 40, 60);
  Box25 = new Box(940, 215, 40, 60);
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});

  score = 0;
}

function draw() {
  bg = background(0,0,100);  
  Engine.update(engine);
  stand1.display();
  stand2.display();

  fill("blue");
  Box1.display();
  fill("blue");
  Box2.display();
  fill("blue");
  Box3.display();
  fill("blue");
  Box4.display();
  fill("blue");
  Box5.display();
  fill("blue");
  Box6.display();
  fill("blue");
  Box7.display();
  fill("pink");
  Box8.display();
  fill("pink");
  Box9.display();
  fill("pink");
  Box10.display();
  fill("pink");
  Box11.display();
  fill("pink");
  Box12.display();
  fill("green");
  Box13.display();
  fill("green");
  Box14.display();
  fill("green");
  Box15.display();
  fill("grey");
  Box16.display();
  fill("blue");  
  Box17.display();
  fill("blue");
  Box18.display();
  fill("blue");
  Box19.display();
  fill("blue");
  Box20.display();
  fill("blue");
  Box21.display();
  fill("green");
  Box22.display();
  fill("green");
  Box23.display();
  fill("green");
  Box24.display();
  fill("pink");
  Box25.display();

  Box1.score();
  Box2.score();
  Box3.score();
  Box4.score();
  Box5.score();
  Box6.score();
  Box7.score();
  Box8.score();
  Box9.score();
  Box10.score();
  Box11.score();
  Box12.score();
  Box13.score();
  Box14.score();
  Box15.score();
  Box16.score();
  Box17.score();
  Box18.score();
  Box19.score();
  Box20.score();
  Box21.score();
  Box22.score();
  Box23.score();
  Box24.score();
  Box25.score();

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();

  textSize(20);
  text("SCORE : " + score, 850, 40);

  if (score === 1300) {
    fill(255,0,0);
    textSize(35);
    text("YOU WON",500,300);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(polygon,{x: 50, y: 200});
    slingShot.attach(polygon);
  }
}

async function getBckgrndImg() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJson = await response.json();

  var dt = responseJson.datetime;

  var hr = dt.slice(11,13);

  console.log(hr);
  
  if(hr >= 6 && hr <= 19) {
      bg = background(52.94,80.78,92.16);
  }
  else {
      bg = background(72,52,117);
  }
  backgroundImg = loadImage(bg);
}