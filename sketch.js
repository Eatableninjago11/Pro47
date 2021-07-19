var bg,bgImg;
var player,playerImg;
var robots_img;
var laser, laserImg;
var shoot = 0;
var robots;
var score = 0;
var backMusic,laserSound;
var playSound;
var heart,heartImg;
//var lives = 3;
function preload(){
 bgImg = loadImage("assets/City2.jpg");
 playerImg = loadImage("assets/GRobot.png")
 robots_img = loadImage("assets/ERobot4.png");
 laserImg = loadImage("assets/laser.png");
backMusic = loadSound("assets/backMusic.mp3");
laserSound = loadSound("assets/LaserMusic.mp3");
heartImg = loadImage("assets/heart.png");
}

function setup() {
createCanvas(700,600)
bg = createSprite(600,300);
bg.addImage(bgImg);
bg.scale = 2.5;

player = createSprite(50,550);
player.addImage(playerImg);
player.scale = 0.2;
//playSound(backMusic, true);

edges = createEdgeSprites();

laserGroup= new Group;
robotsGroup = new Group;

//robots.setCollider("rectangle",-70,-27,5,265,24);
//robots.debug = true;
score = 0;
stroke("red");
fill("red");
textSize(20);
}

function draw() { 
  background(0); 


bg.velocityX =-2;
if (bg.x <50){
  bg.x = bg.width/2;
}



  
if(keyDown("UP_ARROW")){
  player.y = player.y - 4;

}
if(keyDown("DOWN_ARROW")){
  player.y = player.y + 4;

}

  
if(keyDown("LEFT_ARROW")){
  player.x = player.x - 4;
 
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 4;

}
shoot = shoot-1
if(keyDown("space") && shoot <0){
laser = createSprite(player.x,player.y);
laser.addImage(laserImg);
laser.velocityX = 5 ;
laserGroup.add(laser);
shoot = laser.x;
laserSound.play();
}



player.bounceOff(edges);


if(laserGroup.isTouching(robotsGroup)){
  robotsGroup[0].destroy();
  laserGroup[0].destroy();
  score = score+25;
}
spawnRobots();

drawSprites();
text("Score: " + score, 300, 50);
text("Lives: "+lives, 40, 45);
}

function spawnRobots(){
if(World.frameCount % 200 === 0){
   robots = createSprite(700,300);
  robots.addImage(robots_img);
  robots.scale = 0.15;
  robots.velocityX = -(2 + score/100);
  robots.y = Math.round(random(550,50));
  robotsGroup.add(robots);
  robotsGroup.lifetime = 134
}

}





/* Music from
Main Theme (Overture) | The Grand Score by Alexander Nakarada | https://www.serpentsoundstudios.com
Music promoted by https://www.chosic.com/
Attribution 4.0 International (CC BY 4.0)
https://creativecommons.org/licenses/by/4.0/ */
