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
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}
}