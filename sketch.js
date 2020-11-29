var score = 0;
var arrow, arrowIamge;
var bow, bowImage;
var bg, bgImage;
var blueB, blueBImage;
var redB, redBImage;
var pinkB, pinkBImage;
var greenB, greenBImage;
var redBGroup;
var bluBGroup;
var greenBGroup;
var pinkBGroup;


function preload() {
  //load your images here 
  bowImage = loadImage("bow0.png");
  bgImage = loadImage("background0.png");
  blueBImage = loadImage("blue_balloon0.png");
  redBImage = loadImage("red_balloon0.png");
  pinkBImage = loadImage("pink_balloon0.png");
  greenBImage = loadImage("green_balloon0.png");
  arrowImage = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 600);

  bg=createSprite(0, 0, 600, 600);
  bg.addImage(bgImage);
  bg.scale = 2.5;
  //add code here
  bow=createSprite(450, 300, 20, 50);
  bow.addImage(bowImage);
   
  arrowGroup=new Group();
  redBGroup= new Group();
  blueBGroup=new Group();
  greenBGroup=new Group();
  pinkBGroup=new Group();
  
}

function draw() {

  bg.velocityX = -6;
  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }
  //add code here
  bow.y = World.mouseY;

  //release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow() ; 
  }

  var select_balloon = Math.round(random(1, 4));
  console.log(select_balloon)

  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3){
      
    
        blueBalloon();
    } else{
          pinkBalloon();
    }
  }
             

 if (arrowGroup.isTouching(redBGroup)){
   redBGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+1;
   
 } 
  if (arrowGroup.isTouching(blueBGroup)){
    blueBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;   
  }
  if (arrowGroup.isTouching(pinkBGroup)){
    pinkBGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;   
  }
  
 if (arrowGroup.isTouching(greenBGroup)){
   greenBGroup.destroyEach();
   arrowGroup.destroyEach();
   score=score+1;
 } 
  
  drawSprites();
  
  text("score:  "+score,450,50);
}
  
//Creating arrows for bow
function createArrow() {
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrow.x=360;
  arrow.y=bow.y;
  arrow.addImage(addImage)
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20,370)), 10,10);
  red.addImage(redBImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBGroup.add(red);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20,370)), 10,10);
  green.addImage(greenBImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBGroup.add(green);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20,370)), 10,10);
  blue.addImage(blueBImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBGroup.add(blue);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,370)), 10,10);
  pink.addImage(pinkBImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pinkBGroup.add(pink);
}

// Creating arrows for bow
 function createArrow(){
   var arrow= createSprite(100,100,60,10)
   arrow.addImage(arrowImage)  
   arrow.x = 360;
   arrow.y = bow.y;
   arrow.velocityX = -4;
   arrow.lifetime = 100;
   arrow.scale = 0.3;
   arrowGroup.add(arrow);
   
   
 }


 







