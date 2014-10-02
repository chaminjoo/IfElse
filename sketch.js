function setup()
{
   createCanvas(800, 600);
   background(0);
   noFill();
   stroke(255, 0, 0);
   ellipse(400, 300, 100, 100);
}


function draw()
{
   background(255, 255, 255);
   ellipse(400, 400, 400, 400);

if (mouseX < 100) {
  rect(50, 200, 100, 100);
} else if (mouseX < 200){
  rect(150, 200, 100, 100);
} else if (mouseX < 300){
  rect(250, 200, 100, 100);
} else if (mouseX < 400){
  rect(350, 200, 100, 100);
} else if (mouseX < 500){
  rect(450, 200, 100, 100);
} else {
 rect(550, 200, 100, 100);
}
}