var gameState = "Play"
var score;

var tower,towerImage;
var doors,doorImage,doorsGroup;
var railing,climber,climberGroup;
var ghost,ghostImage;
var spooky0;

function preload() 
{
towerImage = loadImage("tower.png");

doorImage = loadImage("door.png");
  
climber = loadImage("climber.png");
   
ghostImage = loadImage("ghost-standing.png");
  
 doorsGroup = new Group()
  climberGroup = new Group()
  
  spooky0 = loadSound("spooky.wav")
  score = 0;
}


function setup()
{ createCanvas(600,600)
  
  tower = createSprite(300,300,200,200);
  tower.addImage("tower",towerImage);
  tower.velocityY = 5;
  
  ghost = createSprite(200,200);
  ghost.addImage("ghost-st",ghostImage);
  ghost.scale = 0.5;
   
 spooky0.loop()
 score = 0;
}


function draw()
{
  background(0)
textSize(35)
  fill("red")
   text("score "+score,300,40);
 

  if(gameState  === "Play")
  {
 score = score+Math.round(frameCount/60) 
     
    if(tower.y>600)
 {
  tower.y = 300; 
}
    if(keyDown ("space"))
  {
    ghost.velocityY = -5;
  }
     
  if(keyDown("left"))
  {
    ghost.x = ghost.x -2;
    
    
  }
  
  if(keyDown("right"))
  {
    ghost.x = ghost.x +2; 
  }  
     if(climberGroup.isTouching(ghost))
  {
    ghost.velocityY = 0;
    
  }
    ghost.velocityY = ghost.velocityY + 0.5;

    spawndoors()
  if(ghost.y>600)
  {
    gameState = "END";
  }
}

   
 
  if(gameState === "END")
  {
    
    ghost.destroy()
    textSize(35)
    text("GameOver",300,300);  
    
    
  }
  
 

  //console.log(tower.y)
  
  drawSprites()
  
}



function spawndoors()
{
  
  if(frameCount % 180 === 0) {
  doors = createSprite(200,50);
  doors.addImage("door",doorImage);
    doors.velocityY = 5;
    doors.x = Math.round(random(120,400));
    doors.lifetime = 300;
    
    
    railing = createSprite(200,50);
    railing.addImage("climberImage",climber);
    railing.x = doors.x;
    railing.velocityY = 5;
    railing.lifetime = 300;
    ghost.depth = doors.depth;
    ghost.depth+=1;
    doorsGroup.add(doors)
    climberGroup.add(railing)
  }
  
}