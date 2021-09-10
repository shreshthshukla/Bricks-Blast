var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17,
block18, block19, block20, block21, block22, block23, block24, block25, block26, block27, block28, block29, block30, block31, block32, block33,
block34, block35, block36, block37, block38, block39, block40, block41, block42, block43, block44, block45, block46, block47, block48, block49, 
block50;

var paddle, ball;
var ball1I, ball2I;
var level1I, level2I, level3I, level4I, level5I;
var padI1, padI2;

var gameState = 0;
var ready = 0;
var serve = 1;
var play = 2;
var end = 3;

function preload(){
  padI1 = loadImage("Paddle1.png");
  padI2 = loadImage("Paddle2.png");

  ball1I = loadImage("Ball.png");
  ball2I = loadImage("Fire ball.png");
}

function setup() {
createCanvas(1500,750);

edges = createEdgeSprites();

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
block9.shapeColor="lightblue";

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
block18.shapeColor="lightblue";

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

block25 = createSprite(80,210,120,30);
block25.shapeColor="green";
block26 = createSprite(245,210,160,30);
block26.shapeColor="pink";
block27 = createSprite(1045,210,175,30);
block27.shapeColor="Air Force blue";
block28 = createSprite(1045,210,175,30);
block28.shapeColor="Almond";
block29 = createSprite(1045,210,175,30);
block29.shapeColor="Alizarin crimson";
block30 = createSprite(1045,210,175,30);
block30.shapeColor="amber";

block34 = createSprite(80,210,120,30);
block34.shapeColor="yellow";
block35 = createSprite(245,210,160,30);
block35.shapeColor="red";
block36 = createSprite(445,210,190,30);
block36.shapeColor="lightblue";
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

// creating the player paddle.
paddle = createSprite(width/2,700)
paddle.addImage(padI1);
paddle.scale=0.8
// paddle.debug = true
paddle.setCollider("rectangle",0,0,200,35)

// creating ball
ball = createSprite(width/2,paddle.y-40)
ball.addImage(ball1I);
ball.scale=0.12
// ball.debug=true
ball.setCollider("circle",0,0,190)
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ball.bounceOff(paddle);
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  if(keyDown("right")){
    paddle.x+=10
  }
  if(keyDown("left")){
    paddle.x-=10
  }

  if(ball.isTouching(block1)){ 

    ball.bounceOff(block1); 

    block1.x = 2000; 

  } 

  if(ball.isTouching(block2)){ 

    ball.bounceOff(block2); 

    block2.x = 2000; 

  } 

  if(ball.isTouching(block3)){ 

    ball.bounceOff(block3); 

    block3.x = 2000; 

  } 

  if(ball.isTouching(block4)){ 

    ball.bounceOff(block4); 

    block4.x = 2000; 

  } 

  if(ball.isTouching(block5)){ 

    ball.bounceOff(block5); 

    block5.x = 2000; 

  } 

  if(ball.isTouching(block6)){ 

    ball.bounceOff(block6); 

    block6.x = 2000; 

  }if(ball.isTouching(block7)){ 

    ball.bounceOff(block7); 

    block7.x = 2000; 

  } 

  if(ball.isTouching(block8)){ 

    ball.bounceOff(block8); 

    block8.x = 2000; 

  } 

  if(ball.isTouching(block9)){ 

    ball.bounceOff(block9); 

    block9.x = 2000; 

  } 

  if(ball.isTouching(block10)){ 

    ball.bounceOff(block10); 

    block10.x = 2000; 

  } 

  if(ball.isTouching(block11)){ 

    ball.bounceOff(block11); 

    block11.x = 2000; 

  } 

  if(ball.isTouching(block12)){ 

    ball.bounceOff(block12); 

    block12.x = 2000; 

  } 

  if(ball.isTouching(block13)){ 

    ball.bounceOff(block13); 

    block13.x = 2000; 

  } 

  if(ball.isTouching(block14)){ 

    ball.bounceOff(block14); 

    block14.x = 2000; 

  } 

  if(ball.isTouching(block15)){ 

    ball.bounceOff(block15); 

    block15.x = 2000; 

  } 

  if(ball.isTouching(block16)){ 

    ball.bounceOff(block16); 

    block16.x = 2000; 

  } 

  if(ball.isTouching(block17)){ 

    ball.bounceOff(block17); 

    block17.x = 2000; 

  } 

  if(ball.isTouching(block18)){ 

    ball.bounceOff(block18); 

    block18.x = 2000; 

  } 

  if(ball.isTouching(block19)){ 

    ball.bounceOff(block19); 

    block19.x = 2000; 

  } 

  if(ball.isTouching(block20)){ 

    ball.bounceOff(block20); 

    block20.x = 2000; 

  } 

  if(ball.isTouching(block21)){ 

    ball.bounceOff(block21); 

    block21.x = 2000; 

  } 

  if(ball.isTouching(block22)){ 

    ball.bounceOff(block22); 

    block22.x = 2000; 

  } 

  if(ball.isTouching(block23)){ 

    ball.bounceOff(block23); 

    block23.x = 2000; 

  } 

  if(ball.isTouching(block24)){ 

    ball.bounceOff(block24); 

    block24.x = 2000; 

  } 

  if(ball.isTouching(block25)){ 

    ball.bounceOff(block25); 

    block25.x = 2000; 

  } 

  if(ball.isTouching(block26)){ 

    ball.bounceOff(block26); 

    block26.x = 2000; 

  } 

  if(ball.isTouching(block27)){ 

    ball.bounceOff(block27); 

    block27.x = 2000; 

  }if(ball.isTouching(block28)){ 

    ball.bounceOff(block28); 

    block28.x = 2000; 

  } 

  if(ball.isTouching(block29)){ 

    ball.bounceOff(block29); 

    block29.x = 2000; 

  } 

  if(ball.isTouching(block30)){ 

    ball.bounceOff(block30); 

    block30.x = 2000; 

  } 

   

  if(ball.isTouching(block34)){ 

    ball.bounceOff(block34); 

    block34.x = 2000; 

  } 

  if(ball.isTouching(block35)){ 

    ball.bounceOff(block35); 

    block35.x = 2000; 

  } 

  if(ball.isTouching(block36)){ 

    ball.bounceOff(block36); 

    block36.x = 2000; 

  } 

  if(ball.isTouching(block37)){ 

    ball.bounceOff(block37); 

    block37.x = 2000; 

  } 

  if(ball.isTouching(block38)){ 

    ball.bounceOff(block38); 

    block38.x = 2000; 

  } 

  if(ball.isTouching(block39)){ 

    ball.bounceOff(block39); 

    block39.x = 2000; 

  } 

  if(ball.isTouching(block40)){ 

    ball.bounceOff(block40); 

    block40.x = 2000; 

  } 

  if(ball.isTouching(block41)){ 

    ball.bounceOff(block41); 

    block41.x = 2000; 

  } 

  if(ball.isTouching(block42)){ 

    ball.bounceOff(block42); 

    block42.x = 2000; 

  } 

  if(ball.isTouching(block43)){ 

    ball.bounceOff(block43); 

    block43.x = 2000; 

  } 

  if(ball.isTouching(block44)){ 

    ball.bounceOff(block44); 

    block44.x = 2000; 

  } 

  if(ball.isTouching(block45)){ 

    ball.bounceOff(block45); 

    block45.x = 2000; 

  } 

  if(ball.isTouching(block46)){ 

    ball.bounceOff(block46); 

    block46.x = 2000; 

  } 

  if(ball.isTouching(block47)){ 

    ball.bounceOff(block47); 

    block47.x = 2000; 

  } 

  if(ball.isTouching(block48)){ 

    ball.bounceOff(block48); 

    block48.x = 2000; 

  } 

  if(ball.isTouching(block49)){ 

    ball.bounceOff(block49); 

    block49.x = 2000; 

  } 

  if(ball.isTouching(block50)){ 

    ball.bounceOff(block50); 

    block50.x = 2000; 

  } 

 

  if(keyDown("space")){
    ball.velocityX=Math.round(random(-10,10))
    ball.velocityY=-10

  }
  text(mouseX+","+mouseY,width/2,height/1.5)
}