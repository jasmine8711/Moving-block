const game = document.getElementById("game");
const bigfish = document.getElementById("bigfish");

//creat the fish
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
creatSmallfishPos();
//put fish in
game.appendChild(creatSmallfishPos());
newFish = document.getElementsByClassName("smallfish")[0];
let smallfishCurrentX = newFish.offsetLeft;
let smallfishCurrentY = newFish.offsetTop;
//console.log(smallfishCurrentX);

//bigfish first position
function init() {
  bigfish.style.position = "absolute";
  bigfish.style.left = "0px";
  bigfish.style.top = "0px";
}
init();

//bigfish onkeydown event
function getKeyAndMove(e) {
  //arrow move the fish
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
      //var about position
      let bigfishCurrentX = bigfish.offsetLeft;
      let bigfishCurrentY = bigfish.offsetTop;

      let bigfishCenterX = bigfish.offsetLeft + 75;
      let bigfishCenterY = bigfish.offsetTop + 40;
  }

  function moveLeft() {
    bigfish.style.left = parseInt(bigfish.style.left) - 20 + "px";
    bigfish.style.transform = "rotateY(180deg)";
  }
  function moveUp() {
    bigfish.style.top = parseInt(bigfish.style.top) - 20 + "px";
    bigfish.style.transform = "rotate(-90deg)";
  }
  function moveRight() {
    bigfish.style.left = parseInt(bigfish.style.left) + 20 + "px";
    bigfish.style.transform = "rotate(0)";
  }
  function moveDown() {
    bigfish.style.top = parseInt(bigfish.style.top) + 20 + "px";
    bigfish.style.transform = "rotate(90deg)";
  }
}

//console.log(bigfishCenterX);
//collision();

/* function collision() {
    if (
      bigfishCenterX > smallfishCurrentX &&
      bigfishCenterX < smallfishCurrentX + 56 &&
      bigfishCenterY > smallfishCurrentY &&
      bigfishCenterY < smallfishCurrentY + 56
    ) {
      creatSmallfishPos().parentNode.removeChild(creatSmallfishPos());
      setTimeout(creatSmallfishPos, 500);
    }
  } */

//console.log(bigfish.offsetTop);
