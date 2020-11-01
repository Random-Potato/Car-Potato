var car, wall;
var speed, weight;

function setup() {
  createCanvas(2000,400);

  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50,200,50,50);
  wall = createSprite(1300,200,60,height/2);

  car.velocityX = speed;
}

function draw() {
  background(0,0,255);
  
  console.log(car.x-wall.x);
  
  if(car.x-wall.x>car.width/2+wall.width/2){
    car.velocityX = 0;
    if(0.5*weight*speed*speed<100){
      car.shapeColor = "green";
    }
    if(0.5*weight*speed*speed > 100 && 0.5*weight*speed*speed<180){
      car.shapeColor = "yellow";
    }
    if(0.5*weight*speed*speed>180){
      car.shapeColor = "red";
    }
  }
  
  
  drawSprites();
}