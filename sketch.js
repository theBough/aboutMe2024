function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FFCAD4");
  textStuff();
}
function textStuff(){
  push()
  fill("#D8E2DC")
  rect(0,0,400,75)
  pop()
  textSize(50)
  
  push()
  fill("#9D8189")
  text("Corbin Boughen",10,50)
  pop()
}//end function
