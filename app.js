const game = document.getElementById("game");
const bigfish = document.getElementById("bigfish");

function creatSmallfishPos() {
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);
  const smallfish = document.createElement("img");
  smallfish.classList.add("smallfish");
  smallfish.src = "smallfish.png";
  smallfish.style.top = randomY + "px";
  smallfish.style.left = randomX + "px";
  return smallfish;
}

let smallfish = creatSmallfishPos();
game.appendChild(smallfish);

function init() {
  bigfish.style.position = "absolute";
  bigfish.style.left = "0px";
  bigfish.style.top = "0px";
}
init();

//bigfish onkeydown event
function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      break;
    case 38: //Up arrow key
      moveUp();
      break;
    case 39: //right arrow key
      moveRight();
      break;
    case 40: //down arrow key
      moveDown();
      break;
  }
  let bigfishCenterX = bigfish.offsetLeft + 75;
  let bigfishCenterY = bigfish.offsetTop + 40;
  let smallfishCurrentX = creatSmallfishPos().offsetLeft;
  let smallfishCurrentY = creatSmallfishPos().offsetTop;
  console.log(smallfishCurrentX);

  if (
    bigfishCenterX > smallfishCurrentX &&
    bigfishCenterX < smallfishCurrentX + creatSmallfishPos().clientWidth &&
    bigfishCenterY > smallfishCurrentY &&
    bigfishCenterY < smallfishCurrentY + creatSmallfishPos().clientHeight
  ) {
    console.log("collison");
  }
}

function moveLeft() {
  bigfish.style.left = parseInt(bigfish.style.left) - 20 + "px";
}
function moveUp() {
  bigfish.style.top = parseInt(bigfish.style.top) - 20 + "px";
}
function moveRight() {
  bigfish.style.left = parseInt(bigfish.style.left) + 20 + "px";
}
function moveDown() {
  bigfish.style.top = parseInt(bigfish.style.top) + 20 + "px";
}

//console.log(bigfish.offsetTop);
