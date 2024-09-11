let myFont,myButton,myRndNum, fact;
let myFacts = [
  "I am a teacher",
  "I have 4 daughters",
  "I coach Football",
  "I don't care about cheese",
  "I showed the class that one movie, that one time, or whatever, Alpha go.  - Jayden"
]

function setup() {
  createCanvas(400, 400);
  myFont = loadFont("guerilla.ttf")
  textFont(myFont)
  buttonStuff();
   fact = "A fact will show here"
}
function draw() {
  background("#FFCAD4");
  textStuff();
}

function createRndNum(){
  myRndNum = Math.random() * 5;
  myRndNum = Math.floor(myRndNum)

}
function spitFacts(){
  createRndNum()
  fact = myFacts[myRndNum]
}

function buttonStuff(){
  myButton = createButton("Click to see a fact")
  myButton.position(100,100);
  myButton.style("cursor", "ppointer");
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
  textSize(20)
 
  text(fact,10,200)
}//end function
