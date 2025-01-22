let Minutemen; 

// let num = 5;
// let nums = [,5,2,7,20]

// let names = ["john", "paul", "george", "ringo"]
// let imgs = []
// let Minutemen; 

function preload(){
  Minutemen = loadImage('images/Minutemen.png');
  pixelDensity(1)
}


function setup () {
createCanvas (600, 600); 
Minutemen.resize(600,600)
background (220);
}

 function draw(){
 let x = random(Minutemen.width);
 let y = random(Minutemen.height);
 let c = Minutemen.get(int(x),int(y));
 fill (c);
 noStroke();
 rect((x),(y),50,50);
// image(img,0,0)
rect(random(x),random(y),75,75);
rect(random(x),(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
//  rect(random(x),random(y),100,100);
// tint(255,0,10)
 // imageMode(CENTER);
  // image(img,width/2,height/2, 100,100);
  
  filter(BLUR,1)
// text(names[2],100,100)
 

 }