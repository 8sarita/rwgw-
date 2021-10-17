
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var play = 0 ;
var vsState = 1;


var gameState = 0;
var player , playerimg;
var  monster, monsterImg1, monsterImg2 ;
var vs , vsImg;
var Ground , GroundImg;
var back1;
 
touches = [];

var loading = 0 ;
var loading0,loading1,loading2,loading3,loading4,loading5;
var load;
var left,leftImg;



function preload()
{

	monsterImg1 = loadImage("monster.png");
	monsterImg2 = loadImage("monsterchange.png");
	vsImg = loadImage("vs.jpg");
      back1 = loadImage("back1.jpg");

	  loading0 = loadImage("loading0.png");
	  loading2 = loadImage("loading2.png");
	  loading3 = loadImage("loading3.png");
	  loading4 = loadImage("loading4.png");
	  loading5 = loadImage("loading5.png");
	  loading1 = loadImage("loading1.png");

	 leftImg = loadImage("left.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

 load = createSprite(windowWidth/2,windowHeight/1.1);
 load.addImage(loading0);

 monster = createSprite(windowWidth/2+300 , windowHeight/2);
	monster.addImage(monsterImg1);
	monster.scale = 0.25;

	left = createSprite(290,500);
	left.addImage(leftImg);

}


function draw() {
  rectMode(CENTER);
  
  
 
  if(gameState === play){

	

	
	background(vsImg);

	// if(touches.length > 0 ||mousePressedOver(monster)){

	// 	touches = [];
	// 	gameState = vsState;
	

	// }

	loading = loading+0.5;

	fill("white");
	textSize(20);
	textFont("CALVIN");
	stroke("black");
	strokeWeight(6);
	text("LOADING..",windowWidth/2-350,windowHeight/1.09);


    
	

	if(loading=== 10){
		
		load.addImage(loading1);
	}
	if(loading=== 20){
		
		load.addImage(loading2);
	}
	if(loading=== 30){
		
		load.addImage(loading3);
	}
	if(loading=== 40){
		
		load.addImage(loading4);
	}
	if(loading=== 60){
		
		load.addImage(loading5);
		gameState = vsState;
	}


  }

  if(gameState === vsState){

	background(back1);
	load.destroy();

	monster.velocityX = 2;
	

   }

  
//   console.log(gameState);
  console.log(mouseX);
//   console.log(mouseY);

  if(touches.length >= 300 ){
	touches=[];
	monster.x = 100;
  }

   drawSprites();

  

 

  

  

 
}



