var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17,
block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33,
block34, block35, block36, block37, block38, block39, block40, block41, block42, block43, block44, block45, block46, block47, block48, block49, 
block50;

var homeI;
var paddle, ball;
var ball1I, ball2I;
var padI1, padI2;
var score, scoreI;
var gameState = -3;
var loading = -3;
var home = -2;
var levels = -1;
var serve = 0;
var play = 1;
var end = 2;
var lifeline;
var level1, level2, level3;
var level1I, level2I, level3I;
var boun;
var ani;
var start, startI;
var playI, pauseI, buttonP;
var TT = 150;
var load, loadI; 
var lock1, lock2, lockI;
var levelsI;
var score2;

function preload(){
  padI1 = loadImage("Paddle1.png");
  padI2 = loadImage("Paddle2.png");

  ball1I = loadImage("Ball.png");
  ball2I = loadImage("Fire ball.png");

  ani = loadAnimation("1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg","13.jpeg",
  "14.jpeg","15.jpeg","16.jpeg","17.jpeg","18.jpeg");

  startI = loadImage("start.png");

  playI = loadImage("Play.png");
  
  pauseI = loadImage("Pause.png");

  loadI = loadAnimation("Load1.png","Load2.png","Load3.png","Load4.png","Load5.png","Load6.png","Load7.png","Load8.png","Load9.png","Load10.png",
  "Load11.png","Load12.png");

  level1I = loadImage("l1.png");
  level2I = loadImage("l2.png");
  level3I = loadImage("l3.png");

  lockI = loadImage("Lock.png");

  levelsI = loadImage("Levels.png");
}

function setup() {
createCanvas(1520,windowHeight);
frameRate = 20;
// creating the start button
start = createSprite(750,600);
start.addImage(startI)
start.scale = 0.2
start.setCollider("circle",0,0,300)

// loading the starting animation
load = createSprite(750,320);
load.addAnimation("changing",loadI);

// animation
boun = createSprite(750,300);
boun.addAnimation("moving",ani);
boun.scale = 0.5
boun.visible = false;

//Creating edges
edges = createEdgeSprites();

// creating the player paddle.
paddle = createSprite(750,700)
paddle.addImage(padI1);
paddle.scale=0.8
paddle.setCollider("rectangle",-2,0,210,35)
paddle.visible = false;

// creating ball
ball = createSprite(750,paddle.y-40)
ball.addImage(ball1I);
ball.scale=0.12
ball.setCollider("circle",0,0,190);
ball.visible = false;

// creating levels
level1 = createSprite(200,315)
level1.addImage(level1I);
level1.scale = 0.5
level1.visible = false;

level2 = createSprite(750,315)
level2.addImage(level2I);
level2.scale = 0.5
level2.visible = false;

level3 = createSprite(1300,315)
level3.addImage(level3I);
level3.scale = 0.5
level3.visible = false;

lock1 = createSprite(810,370)
lock1.addImage(lockI);
lock1.scale = 0.1
lock1.visible = false;

lock2 = createSprite(1360,370)
lock2.addImage(lockI);
lock2.scale = 0.1
lock2.visible = false;

score = 0;

}

function draw() {
  background("lightblue");  


  // Making the ball bounce off the edges and paddle
   ball.bounceOff(paddle);
   ball.bounceOff(edges[0]);
   ball.bounceOff(edges[1]);
   ball.bounceOff(edges[2]);
   
  // bounce the paddle with the edges
  paddle.bounceOff(edges[0])
  paddle.bounceOff(edges[1])

  //  GameState loading
  if(gameState==-3){
    textFont("Algerian")
    strokeWeight(20);
    textSize(20);
    fill ("black")
    text("LOADING...",20,50);
    TT--;
    start.visible = false;
  }
  if(TT==0&&gameState==-3){
    gameState = -2
  }

  // gameState home
  if(gameState==-2){

    start.visible = true;

    boun.visible = true;

    load.visible = false;

    fill("Black")
    textSize(60);
    text("𝓑𝓻𝓲𝓬𝓴𝓼 𝓑𝓵𝓪𝓼𝓽",540,100);

    if(mousePressedOver(start)&&gameState==-2){
      gameState = -1
    }
  }
  // gameState levels
  if(gameState==-1){

    start.visible = false;

    boun.visible = false;

    level1.visible=true;
    level2.visible=true;
    level3.visible=true;
    lock1.visible=true;
    lock2.visible=true;

    image(levelsI,500,70,500,100);

   if(gameState==-1&&mousePressedOver(level1)){
    gameState = 0
   }
  }
// gameState serve
  if(gameState===0){
    level1.visible=false;
    level2.visible=false;
    level3.visible=false;
    lock1.visible=false;
    lock2.visible=false;

    bricks();

    paddle.visible = true;
    ball.visible = true;
    gameState = 1

  }

  // gameState play
  if(gameState===1){
    
    if(keyDown("space")){
      ballServe();
    }
  // Making the paddle move with keys.
  if(keyDown("right")){
  paddle.x+=13
  }
  if(keyDown("left")){
  paddle.x-=13
  }
  fill("Black")
  textSize(40);
  text("𓊈𒆜🆂🅲🅾🆁🅴𒆜𓊉  "+score,50,700)
  moveBricks();


  }





  drawSprites();

    
  

  if(keyDown("r")){
    resetAll();
  }
 
  // text(mouseX+","+mouseY,100,height/1.5)
  
}

function ballServe(){
  ball.velocityX=Math.round(random(-10,10))
  ball.velocityY=-10
}

function resetAll(){
block1.x=95
block2.x=265;
block3.x=445;
block4.x=630;
block5.x=825;
block6.x=1020
block7.x=1220;
block8.x=1420;
block9.x=1420;
block10.x=80;
block11.x=230;
block12.x=390;
block13.x=570;
block14.x=780;
block15.x=990;
block16.x=1190;
block17.x=1405;
block18.x=1230;
block19.x=110;
block20.x=310;
block21.x=490;
block22.x=640;
block23.x=830;
block24.x=1045;
block34.x=80;
block35.x=245;
block36.x=445
block37.x=633
block38.x=820
block39.x=1015
block40.x=1180
block41.x=1350
block42.x=1475;
block43.x=100
block44.x=275
block45.x=465
block46.x=675;
block47.x=870
block48.x=1075
block49.x=1280;
block50.x=1440;

paddle.x = 750

ball.x = 750
ball.y = paddle.y-40
ball.setVelocity(0,0);

}

function bricks(){

//Creating the Bricks.
block1 = createSprite(95,60,150,30);
block1.shapeColor="red";
block2 = createSprite(265,60,140,30);
block2.shapeColor="blue";
block3 = createSprite(445,60,169,30);
block3.shapeColor="yellow";
block4 = createSprite(630,60,155,30);
block4.shapeColor="pink";
block5 = createSprite(825,60,180,30);
block5.shapeColor="green";
block6 = createSprite(1020,60,160,30);
block6.shapeColor="purple";
block7 = createSprite(1220,60,190,30);
block7.shapeColor="teal";
block8 = createSprite(1420,60,160,30);
block8.shapeColor="magenta";

block9 = createSprite(1420,160,160,30);
block9.shapeColor="red";

block10 = createSprite(80,110,120,30);
block10.shapeColor="orange";
block11 = createSprite(230,110,130,30);
block11.shapeColor="black";
block12 = createSprite(390,110,130,30);
block12.shapeColor="lightgreen";
block13 = createSprite(570,110,180,30);
block13.shapeColor="lime";
block14 = createSprite(780,110,190,30);
block14.shapeColor="black";
block15 = createSprite(990,110,175,30);
block15.shapeColor="olive";
block16 = createSprite(1190,110,180,30);
block16.shapeColor="red";
block17 = createSprite(1405,110,190,30);
block17.shapeColor="blue";

block18 = createSprite(1230,160,150,30);
block18.shapeColor="pink";

block19 = createSprite(110,160,180,30);
block19.shapeColor="orange";
block20 = createSprite(310,160,170,30);
block20.shapeColor="brown";
block21 = createSprite(490,160,130,30);
block21.shapeColor="lightpink";
block22 = createSprite(640,160,120,30);
block22.shapeColor="yellow";
block23 = createSprite(830,160,200,30);
block23.shapeColor="purple";
block24 = createSprite(1045,160,175,30);
block24.shapeColor="red";

block34 = createSprite(80,210,120,30);
block34.shapeColor="yellow";
block35 = createSprite(245,210,160,30);
block35.shapeColor="red";
block36 = createSprite(445,210,190,30);
block36.shapeColor="brown";
block37 = createSprite(633,210,135,30);
block37.shapeColor="blue";
block38 = createSprite(820,210,190,30);
block38.shapeColor="magenta";
block39 = createSprite(1015,210,150,30);
block39.shapeColor="green";
block40 = createSprite(1180,210,130,30);
block40.shapeColor="teal";
block41 = createSprite(1350,210,160,30);
block41.shapeColor="coral";
block42 = createSprite(1475,210,45,30);
block42.shapeColor="cyan";

block43 = createSprite(100,260,160,30);
block43.shapeColor="darkorchid";
block44 = createSprite(275,260,135,30);
block44.shapeColor="indianred";
block45 = createSprite(465,260,190,30);
block45.shapeColor="navy";
block46 = createSprite(675,260,175,30);
block46.shapeColor="orangered";
block47 = createSprite(870,260,155,30);
block47.shapeColor="royalblue";
block48 = createSprite(1075,260,200,30);
block48.shapeColor="seagreen";
block49 = createSprite(1280,260,160,30);
block49.shapeColor="tomato";
block50 = createSprite(1440,260,115,30);
block50.shapeColor="saddlebrown";
}

function moveBricks(){
  if(ball.isTouching(block1)){ 

    ball.bounceOff(block1); 

    block1.x = 2000;  
    console.log("touched")

    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block2)){ 

    ball.bounceOff(block2); 

    block2.x = 2000; 
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block3)){ 

    ball.bounceOff(block3); 

    block3.x = 2000; 
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block4)){ 

    ball.bounceOff(block4); 

    block4.x = 2000; 
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block5)){ 

    ball.bounceOff(block5); 

    block5.x = 2000; 
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block6)){ 

    ball.bounceOff(block6); 

    block6.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  }

  if(ball.isTouching(block7)){ 

    ball.bounceOff(block7); 

    block7.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block8)){ 

    ball.bounceOff(block8); 

    block8.x = 2000; 
var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block9)){ 

    ball.bounceOff(block9); 

    block9.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block10)){ 

    ball.bounceOff(block10); 

    block10.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block11)){ 

    ball.bounceOff(block11); 

    block11.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block12)){ 

    ball.bounceOff(block12); 

    block12.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block13)){ 

    ball.bounceOff(block13); 

    block13.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block14)){ 

    ball.bounceOff(block14); 

    block14.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block15)){ 

    ball.bounceOff(block15); 

    block15.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block16)){ 

    ball.bounceOff(block16); 

    block16.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block17)){ 

    ball.bounceOff(block17); 

    block17.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block18)){ 

    ball.bounceOff(block18); 

    block18.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block19)){ 

    ball.bounceOff(block19); 

    block19.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block20)){ 

    ball.bounceOff(block20); 

    block20.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block21)){ 

    ball.bounceOff(block21); 

    block21.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block22)){ 

    ball.bounceOff(block22); 

    block22.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block23)){ 

    ball.bounceOff(block23); 

    block23.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block24)){ 

    ball.bounceOff(block24); 

    block24.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block34)){ 

    ball.bounceOff(block34); 

    block34.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block35)){ 

    ball.bounceOff(block35); 

    block35.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block36)){ 

    ball.bounceOff(block36); 

    block36.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block37)){ 

    ball.bounceOff(block37); 

    block37.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block38)){ 

    ball.bounceOff(block38); 

    block38.x = 2000; 
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block39)){ 

    ball.bounceOff(block39); 

    block39.x = 2000; 
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block40)){ 

    ball.bounceOff(block40); 
    block40.x = 2000; 


    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block41)){ 

    ball.bounceOff(block41); 
    block41.x = 2000; 

    console.log(block41.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block42)){ 

    ball.bounceOff(block42); 
    block42.x = 2000; 

    console.log(block42.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block43)){ 

    ball.bounceOff(block43); 
    block43.x = 2000; 

    console.log(block43.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block44)){ 

    ball.bounceOff(block44); 
    block44.x = 2000; 

    console.log(block44.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block45)){ 

    ball.bounceOff(block45); 
    block45.x = 2000; 

    console.log(block45.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block46)){ 

    ball.bounceOff(block46); 
    block46.x = 2000; 

    console.log(block46.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block47)){ 

    ball.bounceOff(block47); 
    block47.x = 2000; 

    console.log(block47.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block48)){ 

    ball.bounceOff(block48); 
    block48.x = 2000; 

    console.log(block48.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block49)){ 

    ball.bounceOff(block49); 
    block49.x = 2000; 

    console.log(block49.x);

    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 

  if(ball.isTouching(block50)){ 
    ball.bounceOff(block50); 
    block50.x = 2000; 

   console.log(block50.x);
    console.log("touched")
    var rand = Math.round(random(1,2));

    if(rand==1){
      score = score+50;
    }
    else{    score = score+60
    }
  } 
}