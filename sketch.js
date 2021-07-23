const Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;

var bg,bgIMG
var engine, world
var snow1, snow2
var snow = []
var ice=[]
var ice;


function setup() {
  createCanvas(800,400);
  bgIMG = loadImage("snow2.jpg")
  engine = Engine.create()
  world = engine.world
}



function draw() {
  background(bgIMG);
  
  
  Engine.update(engine)
  if(frameCount%10===0){
    snow.push(new Snow(random(0,500),0,15));
  }


  for (var r = 0; r< snow.length; r++){
    snow[r].display();
  }
  //pop()
  if(frameCount%10===0){
    ice.push(new Ice(random(0,500),0,15));
  }


  for (var i= 0; i< snow.length; i++){
    ice[i].display();
  }
  //pop()
  drawSprites();
}