
var arrow,arrowimg;
var archer,archerimg
var water,waterimg
var gameOver,gameOverimg
var ground,groundimg
var apple,appleimg
var watermelon,watermelonimg
var target,targetimg


function preload(){
	arrowimg = loadImage("arrowpic.png");
	archerimg = loadImage("archer2.0.png");
	waterimg = loadImage("water.png");
    groundimg = loadImage("Ground.png")
    appleimg = loadImage("apple.png")
    watermelonimg = loadImage("watermelon.png")
    targetimg = loadImage("target1.png")
    
  }
function setup() {
    createCanvas(700,700);

	
	water=createSprite(200,width/16);
	water.addImage(waterimg);
	water.velocityX = 4;

    ground=createSprite(350,370)
    ground.addImage(groundimg)
    ground.scale=0.3

    archer=createSprite(350,470)
    archer.addImage(archerimg)
    archer.scale=0.3

    
    targetgrp=new Group()
    applegrp=new Group()
    watermelongrp=new Group()
    
  

}



function draw() {

    if (keyDown(39)){
        archer.x=archer.x+5

    }

    if (keyDown(37)){
        archer.x=archer.x-5
    }

   if (keyDown(32)){
       arrow=createSprite(archer.x,archer.y)
       arrow.addImage(arrowimg)
       arrow.scale=0.15
       arrow.velocityY=-4
   }
    

    createtarget();
  


 drawSprites();
}


function createtarget(){
    if (World.frameCount % 200 == 0){
        var target=createSprite(Math.round(random(width-700,700),10))
        target.addImage(targetimg)
        target.scale=0.1
        target.velocityX=4
        target.lifetime=200
        targetgrp.add(target)
    }


}


  

