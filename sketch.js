var bg, bgImg;
var ground, character, characterImg;
var wall1, wall2;

function preload() {
  bgImg = loadImage("Pictures/SideBrickWallIcyTower1.png");
  characterImg = loadImage("Pictures/IcyTowerCharacterRunning.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  bg.addImage(bgImg);
  bg.scale = 1.6;

  character = createSprite(750, 750);
  character.addImage(characterImg);
  character.scale = 0.3;

  wall1 = createSprite(414, 400, 10, windowHeight);
  wall1.visible = false;

  wall2 = createSprite(1400, 400, 10, windowHeight);
  wall2.visible = false;

  ground = createSprite(windowWidth/2, windowHeight - 15, 1150, 30);
}

function draw() {
  background(0); 
  
  if(keyDown(RIGHT_ARROW)) {
    character.x = character.x + 5;
  }

  if(keyDown(LEFT_ARROW)) {
    character.x = character.x - 5;
  }

  if(keyDown('space')) {
    character.velocityY = -10;
  }

  character.velocityY = character.velocityY + 0.8;

  character.collide(ground);
  character.collide(wall1);
  character.collide(wall2);

  spawnPlatforms();

  drawSprites();
}

function spawnPlatforms() {
  var platform = createSprite(650, 700, 300, 30);

  if(character.y <= platform.y){
  character.collide(platform);
  }
}