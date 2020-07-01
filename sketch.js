var car,wall;
var speed,weight;




function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight= random(400,1500);


  car = createSprite(50, 200, 100, 50);
  car.shapeColor = "purple";

  wall = createSprite(800,200,60,1600/2);


}

function draw() {
  background("black"); 
  
  car.velocityX = speed;

  if(wall.x - car.x < car.width/2+wall.width/2){   
     car.velocityX = 0;
     var deformation = 0.5*speed*speed/22509;
     fill("white");
     if(deformation>180){
       car.shapeColor = "green";
       text("speed = " + speed,100,100);
       text("weight = " + weight,100,300);
       text("deformation = " + deformation,100,200);
     }
     if(deformation<180 && deformation>100){ 
        car.shapeColor = "yellow";
        text("speed = " + speed,100,100);
        text("weight = " + weight,100,300);
        text("deformation = " + deformation,100,200);
     }
     if(deformation<100){
       car.shapeColor = "blue";
       text("speed = " + speed,100,100);
       text("weight = " + weight,100,300);
       text("deformation = " + deformation,100,200);
     }
    }
     
     
  
  drawSprites();
}