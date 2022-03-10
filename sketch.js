var box;
var airplane, airplaneImg;
var background, backgroundImg;
function preload(){
  airplaneImg = loadImage("airplane.png");
  backgroundImg = loadImage("runway.jpg");
}
function setup() {
  createCanvas(400,400);
airplane = createSprite(200,200)
 airplane.addImage(airplaneImg);
 airplane.scale = 0.08;
}

function draw(){
  background(windowWidth, windowHeight);
 
    if (keyIsDown(UP_ARROW)) {
    airplane.position.y -=5
}

 if (keyIsDown(DOWN_ARROW)){
    airplane.position.y +=5
  }

  drawSprites();
  
}




