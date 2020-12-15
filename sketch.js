var wall, thickness;
var bulet, speed, weight;
var Damage;

function setup() {
  createCanvas(1600,400);
 
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50,200,15,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);;
 
}

function draw() {
  background(20,40,60);  

  if (hasCollided(bullet,wall))  {
      
      bullet.velocityX=0;
      bullet.velocityY=0;

      Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (Damage<10) 
      {
        wall.shapeColor = "green";
      } 
      else if (Damage>10) 
      {
        wall.shapeColor = "red";
      } 
    }

  drawSprites();
}