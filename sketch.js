//Create variables here
var dog, happyDog, database, foodS, foodStock, dog1, dog2;
function preload()
{
  dog2=loadImage("images/dogImg.png")
  dog1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,250,5,5)
  dog.scale=0.2
  dog.addImage(dog1)
  foodStock=database.ref("Food")
  foodStock.on("value",readStock)

  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dog2)
  }
  drawSprites();
  textSize(15)
  fill("white")
  text("Food Remaining : " + foodS,180,150)
  text("Note:Press UP_ARROW key to feed milk", 100,16)
  //add styles here
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x>0){
  x=x-1
  }
  database.ref('/').update({Food:x})
}

