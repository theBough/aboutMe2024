let myFont;
let myButton;

function setup() {
  createCanvas(400, 400);
  myFont = loadFont("guerilla.ttf")
  textFont(myFont)
  buttonStuff();
}
function draw() {
  background("#FFCAD4");
  textStuff();
}

function spitFacts(){
  
}

function buttonStuff(){
  myButton = createButton("Click to see a fact")
  myButton.position(100,100);
  myButton.style("cursor", "pointer");
  myButton.style("background-color", "#e4c1f9");
  myButton.mousePressed(spitFacts)
  
}//end buttonStuff

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
