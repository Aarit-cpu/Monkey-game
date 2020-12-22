var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  // creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
    
  
  // creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
// creating banana
 banana = createSprite(300,240,30,30);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -5; 
  
  // create obstacles and banana group
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
                            
  
  // creating obstacle
  obstacle = createSprite(192,330,30,30);
  obstacle.addImage(obstaceImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;


  
}


function draw() {
background(255);

  if(gameState===PLAY){
  if(ground.x<0){
    ground.x = ground.width/2;
  }
 
  
  
  if(keyDown("space")){
  monkey.velocityY = -10;    
       
  }
  
 if (frameCount % 80 === 0) {
    var banana = createSprite(300,240,30,30);
    banana.y = Math.round(random(120,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    
    //add each bana to the group
    bananaGroup.add(banana);
  }  
  
 monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    
    
    
  if (frameCount % 80 === 0) {
    obstacle = createSprite(320,354,30,30);
    obstacle.y = Math.round(random(200,800));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
   obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
   
    
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }   
    
    
   
var survivalTime = 0;
  stroke("white");
  textSize = 20;
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize = 20;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :"+survivalTime,100,50); 
  
  }  
      
  
 

 drawSprites();

  
  
}






