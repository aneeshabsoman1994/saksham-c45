
var player,ground1;
var ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11;
var ground12,ground13;
var canvas;


function setup() {
  canvas=createCanvas(1500, displayHeight);
  player = createSprite(100, displayHeight - 560, 50);
  

//creating ground sprites
ground1 = createSprite(500, displayHeight - 205, 1000, 110);
ground2 = createSprite(1200, displayHeight - 200, 150, 50);
ground3 = createSprite(1450, displayHeight - 250, 150, 50);
ground4 = createSprite(1800, displayHeight - 200, 150, 50);
ground5 = createSprite(2300, displayHeight - 250, 500, 50);
ground6 = createSprite(2900, displayHeight - 205, 500, 110);
ground7 = createSprite(3280, displayHeight - 300, 250, 50);
ground8 = createSprite(4500, displayHeight - 205, 500, 110);
ground9 = createSprite(4950, displayHeight - 260, 150, 50);
ground10 = createSprite(5200, displayHeight - 205, 150, 50);
ground11 = createSprite(5500, displayHeight - 260, 150, 50);
ground12 = createSprite(5750, displayHeight - 310, 150, 50);
ground13 = createSprite(6200, displayHeight - 205, 250, 110);



}

function draw(){
  rectMode(CENTER)
  background(180);
  
  //adding gravity
  player.velocityY = player.velocityY + 0.8

  
    //stone colliding all grounds
    player.collide(ground1)
    player.collide(ground2)
    player.collide(ground3)
    player.collide(ground4)
    player.collide(ground5)
    player.collide(ground6)
    player.collide(ground7)
    player.collide(ground8)
    player.collide(ground9)
    player.collide(ground10)
    player.collide(ground11)
    player.collide(ground12)
    player.collide(ground13)
    

    //position of camera
    camera.position.x = player.x;
    camera.position.y = player.y;
    camera.zoom=1;

   drawSprites();

}

function keyPressed() {
  player.velocityY=-5;
  player.velocityX=5;
}

function keyReleased() {
  player.velocityY =0;
  player.velocityX=0;
}


