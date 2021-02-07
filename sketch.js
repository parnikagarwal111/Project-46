var bgImage,bg;
var ground;
var boy,boyImage;
var obstacles,obstacleGroup;
var PLAY=1,END=0;
var gameState=PLAY;
var greenHat,brownHat,yellowHat,blueHat,redHat,orangeHat,purpleHat,whiteHat;
var score=0;
var ob1,ob2,ob3,ob4,ob4,ob5,ob6;

function preload(){
  bgImage=loadImage("ground3.png");
  boyImage=loadAnimation("doraemon1.png","doraemon2.png","doraemon3.png","doraemon4.png");
  ob1=loadImage("obstacle 1.png");
  ob2=loadImage("obstacle 2.png");
  ob3=loadImage("obstacle 3.png");
  ob4=loadImage("obstacle 4.png");
  ob5=loadImage("obstacle 5.png");
  ob6=loadImage("obstacle 6.png");


}

function setup() {
  createCanvas(1350,650);
  
  bg=createSprite(675,150,1600,650);
  bg.addImage(bgImage);
  bg.velocityX=-4;
  bg.scale=5.5;

  ground=createSprite(675,600,1400,40);
  ground.visible=true;

  boy=createSprite(80,550,30,100);
  boy.addAnimation("boy",boyImage);
  boy.scale=0.4;
  
  obstacleGroup=new Group;

  }

function draw() {
  background(0);

  if(gameState===PLAY){
  if(bg.x<0){
    bg.x=bg.width/2;
  }

  //space key 
  if(keyDown("space")){
    boy.velocityY=-10;
  }
  boy.velocityY=boy.velocityY+0.5;
  boy.collide(ground);

  if(boy.isTouching(obstacleGroup)){
    gameState=END;
  }

  //function
  spawnObstacles();
  spawnHats();
  drawSprites();

}

  if(gameState===END){
    textSize(150);
    fill("red");
    stroke("white");
    text("GAME OVER",200,350);
    textSize(50);
    text("Better Luck Next Time",400,450);
  }
}

function spawnObstacles(){
  if(frameCount%203===0){
    obstacles=createSprite(1350,560,30,100);
    obstacles.velocityX=-4;
    obstacles.lifetime=340;
    obstacleGroup.add(obstacles);

    var rand=Math.round(random(1,6));
    switch(3){
      case 1: obstacles.addImage(ob1);
      obstacles.scale=0.2;
      break;
      case 2: obstacles.addImage(ob2);
      obstacles.scale=0.2;
      break;
      case 3: obstacles.addImage(ob3);
      obstacles.debug=true;
      obstacles.y=540;
      obstacles.setCollider("rectangle",0,0,10,10);
      obstacles.scale=0.4;
      break;
      case 4: obstacles.addImage(ob4);
      obstacles.debug=true;
      obstacles.scale=0.07;
      break;
      case 5: obstacles.addImage(ob5);
      obstacles.scale=0.1;
      break;
      case 6: obstacles.addImage(ob6);
      obstacles.scale=0.2;
      break;
      default:
      break;
    }
  }
}

function spawnHats(){
  //green hat
  if(frameCount===1500){
    greenHat=createSprite(1350,580,50,50);
    greenHat.velocityX=-4;
    greenHat.lifetime=340;
  }

  //brown hat
  if(frameCount===3000){
    brownHat=createSprite(1350,580,50,50);
    brownHat.velocityX=-4;
    brownHat.lifetime=340;
  }

  //yellow hat
  if(frameCount===4500){
    yellowHat=createSprite(1350,580,50,50);
    yellowHat.velocityX=-4;
    yellowHat.lifetime=340;
  }

  //blue hat
  if(frameCount===6000){
    blueHat=createSprite(1350,580,50,50);
    blueHat.velocityX=-4;
    blueHat.lifetime=340;
  }

  //red hat
  if(frameCount===7500){
    redHat=createSprite(1350,580,50,50);
    redHat.velocityX=-4;
    redHat.lifetime=340;
  }

  //orange hat
  if(frameCount===9000){
    orangeHat=createSprite(1350,580,50,50);
    orangeHat.velocityX=-4;
    orangeHat.lifetime=340;
  }

  //purple hat 
  if(frameCount===10500){
    purpleHat=createSprite(1350,580,50,50);
    purpleHat.velocityX=-4;
    purpleHat.lifetime=340;
  }

  //white hat
  if(frameCount===12000){
    whiteHat=createSprite(1350,580,50,50);
    whiteHat.velocityX=-4;
    whiteHat.lifetime=340;
  }

  if(frameCount===15000){
    sv=createSprite(1300,580,200,400);
    sv.velocityX=-4;
  }
}