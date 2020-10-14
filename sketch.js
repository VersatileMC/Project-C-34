//Create variables here
var dog;
var happyDog;
var Dog

var database;

var foodS;
var foodStock

function preload()
{
  //load images here (okay whitehat :D)
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  Dog = createSprite(250,250,10,10);
  Dog.addImage(dog);
  Dog.scale = 0.5;
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happyDog);
    
  }
  drawSprites();

  fill("black")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",10,40);
  text("Food remaining: " + foodS,10,100);
}

//Function to read values from database
function readStock(data){
  foodS = data.val();
}

//Function to write vlues in Database
function writeStock(x){

  database.ref("/").update({
    Food:x
  })
}