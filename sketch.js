const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine
var world
var bg
var snows1=[]
var snows2=[]

function preload (){
bg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  for (var i=0;i<=width;i=i+50){
    snows1.push(new snow1(i,20,10))
  }
  for (var j=0;j<=width;j=j+50){
    snows2.push(new snow2(j,20,10))
  }
}


function draw() {
  background(bg);  
  Engine.update(engine)
  if (frameCount%30===0){
    snows1.push(new snow1(random(10,760),20,10))
    snows2.push(new snow2(random(10,760),20,10))
  }
  for (var i=0;i<snows1.length;i++){
    snows1[i].display()
  }
  for (var j=0;j<snows2.length;j++){
    snows2[j].display()
  }
}