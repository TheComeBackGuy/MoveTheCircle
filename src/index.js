import "./styles.css";

// Okay, so created theCircle to identify the div element.
let theCircle = document.getElementById("circle");
let speed = 1;
let frameRate = 10;
let myHorz = "left";
let myVert = "down";
let cHue = 1;
let cSat = 100;
let cLit = 0;

// Then created circleLeft to actually get the value of that element.
// It returned as a string,
// So, I used .slice to delete the "px" from the end of the string
// Lastley, I used Number to turn it into a number I could increment
let circleLeft = Number(
  window.getComputedStyle(theCircle).getPropertyValue("left").slice(0, 2)
);
let circleTop = Number(
  window.getComputedStyle(theCircle).getPropertyValue("top").slice(0, 2)
);
let circleWidth = Number(
  window.getComputedStyle(theCircle).getPropertyValue("width").slice(0, 3)
);
let circleHeight = Number(
  window.getComputedStyle(theCircle).getPropertyValue("height").slice(0, 3)
);
console.log(circleWidth);

//////////////////////////////////\run the functions of "moving"
function runMoving() {
  setInterval(moving, frameRate);
}

function moving() {
  makeColor();

  // console.log(cRed);
  //changes horizonal state
  if (myHorz === "left") {
    moveLeft();
  } else {
    moveRight();
  }
  //Changes vertical state
  if (myVert === "up") {
    moveUp();
  } else {
    moveDown();
  }

  //assigns states to mvoement
  if (circleLeft >= window.innerWidth - circleWidth) {
    myHorz = "right";
  } else if (circleLeft <= 0) {
    myHorz = "left";
  } else if (circleTop <= 0) {
    myVert = "down";
  } else if (circleTop >= window.innerHeight - circleHeight) {
    myVert = "up";
  }

  //get circle properties to detect when we hit an edge
  document.getElementById("circle").style.left = `${circleLeft}px`;
  document.getElementById("circle").style.top = `${circleTop}px`;
  document.getElementById(
    "circle"
  ).style.fill = `hsl(${cHue}, ${cSat}%, ${cLit}%)`;
}

// console.log("ypu: " + cHue);
/////////////////////////////////\MOVEMENT FUNCTIONS

function moveLeft() {
  circleLeft += speed;
}

function moveRight() {
  circleLeft -= speed;
}

function moveDown() {
  circleTop += speed;
}

function moveUp() {
  circleTop -= speed;
}

///////////////////////////////////////////
/////////////////\RUN ALL THE SHIT!
runMoving();

///////////////////////////////////////////////////////////////\COLOR STUFF
// replaced RGB with HSL
//realized you were cycling through hue

function makeColor() {
  cHue += 0.1;
  cLit += 0.25;
  // console.log(cHue);

  if (cHue >= 360) {
    cHue = 0;
  }
  if (cLit >= 60) {
    cLit = 60;
  }
  // console.log(`${cHue}, ${cSat}, ${cLit}`);
  ///lol, clit. took me 5mins to notice that
  // }
}
