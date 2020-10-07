import "./styles.css";

// Okay, so created theCircle to identify the div element.
let theCircle = document.getElementById("circle");
let speed = 1;
let frameRate = 10;
let myDirection = "left";
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
  window.getComputedStyle(theCircle).getPropertyValue("width").slice(0, 2)
);
// console.log(`circleLeft is : ${circleLeft}`);
// console.log(circleTop);

//////////////////////////////////\run the functions of "moving"
function runMoving() {
  setInterval(moving, frameRate);
}

///do this shit when I strike an edge

function moving() {
  if (myDirection === "left") {
    moveLeft();
  } else if (myDirection === "right") {
    moveRight();
  } else if (myDirection === "up") {
    moveUp();
  } else if (myDirection === "down") {
    moveDown();
  }

  if (circleLeft >= window.innerWidth - circleWidth) {
    myDirection = "right";
    makeColor();
  } else if (circleLeft <= 0) {
    myDirection = "left";
    makeColor();
  } else if (circleTop <= 0) {
    myDirection = "down";
  } else if (circleTop >= window.innerHeight - circleWidth) {
    myDirection = "up";
  }

  document.getElementById("circle").style.left = `${circleLeft}px`;
  document.getElementById("circle").style.top = `${circleTop}px`;
  // makeColor();
}

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
//Random RGB number
let rgb = "";
let cRed = 0;
let cBlue = 0;
let cGreen = 0;

/**
 * This is the color generator. Honestly, I could have just
 * PUT the Math line right in each of the variables, but I wanted to
 * make sure I was still practicing my loops and other code.
 */
function makeColor() {
  for (rgb = 0; rgb < 3; rgb++) {
    let randoColor = Math.floor(Math.random() * 255);
    if (rgb === 0) {
      cRed = randoColor;
    } else if (rgb === 1) {
      cBlue = randoColor;
    } else if (rgb === 2) {
      cGreen = randoColor;
    }
  }
  document.getElementById(
    "circle"
  ).style.backgroundColor = `rgb(${cRed}, ${cBlue}, ${cGreen})`;
  // console.log(`rgb(${cRed}, ${cBlue}, ${cGreen})`);
}
