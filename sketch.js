var car,wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(1600,800);
  car =createSprite(50, 200, 50, 50);

  wall =createSprite(1500, 200, 60, height/2);

  speed=random(55,90)
  weight=random(400,1500)

  car.velocityX =speed;
}

function draw() {
  background("black");
  


  

if(wall.x-car.x < car.width/2+wall.width/2)
{
 
  car.velocityX=0;
  var deformation=0.5 *  weight * speed* speed/22509;
  if(deformation>180)
  {
      car.shapeColour=color("red");
  }

  if(deformation<180 && deformation>100)
  {
    
    car.shapeColour=colour("green");  

  }

  if(deformation<100)
  {
       car.shapeColour=colour("yellow");
  }


}









  drawSprites();
}