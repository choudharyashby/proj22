var starSprite,starIMG,fairySprite,fairyImg,skyIMG;
var starBody;
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body;


function preload(){
  skyIMG = loadImage("images/starnight.png");
  fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
  starIMG = loadImage("images/star.png")
}

function setup() {
  createCanvas(800,600);

   fairySprite = createSprite(300,490);
   fairySprite.addAnimation("flying_fairy",fairyImg);
   fairySprite.scale = 0.2;

   starSprite = createSprite(650,30);
   starSprite.addImage(starIMG);
   starSprite.scale = 0.3;


    engine = Engine.create();
    world = engine.world;
  
    starBody = Bodies.circle(650 , 30 , 5, {restitution:0.5, isStatic:true});
    World.add(world, starBody);
  
  Engine.run(engine);
  
}

function draw(){
  Engine.update(engine)

  background(skyIMG);
  fairySprite.velocityX=0
  fairySprite.velocityY=0

  starSprite.x = starBody.position.x
  starSprite.y = starBody.position.y

  if(keyCode === LEFT_ARROW){
    fairySprite.velocityX = -6;
  }
  else if(keyCode === RIGHT_ARROW){
    fairySprite.velocityX = 3;
  }
  else if(keyCode === DOWN_ARROW){
      starSprite.velocityY = 3
  }

  if(starBody.position.y > 470){
    starSprite.velocityY-0
  }

  drawSprites();
}