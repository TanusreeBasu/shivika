var dog;
var dogimg;
var dog2;
var dog2img;
var Pgrass1
var Pbackground1;
var playing;
function preload(){

  Pgrass1=loadImage("images/grass1.jpg")
  dogimg=loadImage("images/Husky.png")
  dog2img=loadImage("images/evil Husky.png")
  Pbackground1=loadImage("images/paradise1.jpg")
  
}

function setup() {

  createCanvas(800,400);
  background(Pgrass1); 
  
  
  dog1 = createSprite(300, 200, 50, 50);
  dog1.addImage(dogimg)

  dog2 = createSprite(500, 300, 50, 50);
  dog2.addImage(dog2img)

  button=new Button();
}

function draw() {


  button.display()
  drawSprites();
}