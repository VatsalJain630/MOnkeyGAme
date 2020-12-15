
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
 
createCanvas(600,600);  
  
 
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
   obstaclesGroup = createGroup();


  
  
  
  
  
  

  
}


function draw() {

  background(255);
   drawSprites();
  if (ground.x<180) {
    ground.x=ground.width/2;
    
  }
  
  if (keyDown("space") ){
    monkey.velocityY=-12   ;
  }
 monkey.velocityY=monkey.velocityY+0.8;
 monkey.collide(ground); 
  
  var survivalTime=0;   
  stroke("white");
   textSize(20);
  fill("white");
 text("Score:"+score,500,50);
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  spawnobstacle();
  
  
 
}

function spawnobstacle(){
  if (frameCount % 60 === 0){
   var stone = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
  }
  
  
  
  
}




