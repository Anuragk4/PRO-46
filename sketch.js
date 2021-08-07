var car1,car2,car3,car4;
var car1img,car2img,car3img,car4img
var trackimg;
var fimg,

function preload(){
  car1img=loadImage("car1.webp")
  car2img=loadImage("CAR2.png")
  car3img=loadImage("CAR3.png")
  car4img=loadImage("CAR4.webp")
 trackimg=loadImage("track.png")
 fimg=loadImage("THUMBNAIL.jpg")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
}

function draw() {
  background(255,255,255);

  drawSprites();
}