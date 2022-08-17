var sea, seaImg;
var ship, shipImg1;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400, 200);
  ship = createSprite(200, 200);
  ship.scale = 0.2;
  sea.scale = 0.3;
  
  sea.addImage(seaImg);
  ship.addAnimation("barco", shipImg1);

  sea.velocityX = -3;
}

function draw() {
  background("blue");

  if(sea.x < 0) {
    sea.x = sea.width/2;
  }

  drawSprites();
}
