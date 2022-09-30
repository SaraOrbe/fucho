var canvas;
var backgroundImage;



function preload() {
backgroundImage = loadImage("images.jpg");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImage);
  drawSprites();

}