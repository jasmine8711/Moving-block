const game = document.getElementById("game");
const bigfish = document.getElementById("bigfish");
const point = document.getElementById("point");
let score = 0;
let randomX = Math.floor(Math.random() * window.innerWidth);
let randomY = Math.floor(Math.random() * window.innerHeight);

//creat the fish
function creatSmallfishPos(x, y) {
  const smallfish = document.createElement("img");
  smallfish.classList.add("smallfish");
  smallfish.src = "smallfish.png";
  if (randomY >= window.innerHeight - 200) {
    randomY = window.innerHeight - 210;
  }

  smallfish.style.top = randomY + "px";
  smallfish.style.left = randomX + "px";
  game.appendChild(smallfish);

  return smallfish;
}
creatSmallfishPos(randomX, randomY);
//put fish in

//bigfish first position
function init() {
  bigfish.style.position = "absolute";
  bigfish.style.left = "0px";
  bigfish.style.top = "0px";
}
init();

let newFish = document.getElementsByClassName("smallfish")[0];

//let smallfishCurrentY = newFish.offsetTop;

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
  }

  //var about position
  let bigfishCurrentX = bigfish.offsetLeft;
  let bigfishCurrentY = bigfish.offsetTop;

  let bigfishCenterX = bigfish.offsetLeft + 75;
  let bigfishCenterY = bigfish.offsetTop + 40;

  //console.log(bigfishCurrentX);
  function collision(newfish) {
    if (
      bigfishCenterX > newfish.offsetLeft + 10 &&
      bigfishCenterX < newfish.offsetLeft + 60 &&
      bigfishCenterY > newfish.offsetTop + 10 &&
      bigfishCenterY < newfish.offsetTop + 60
    ) {
      score++;
      point.innerText = score;
      newfish.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      newfish.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  }
  collision(newFish);
}

function moveLeft() {
  if (bigfish.offsetLeft > 0) {
    bigfish.style.left = parseInt(bigfish.style.left) - 20 + "px";
    bigfish.style.transform = "rotateY(180deg)";
  } else {
    bigfish.style.left = "0px";
  }
}
function moveUp() {
  if (bigfish.offsetTop > 0) {
    bigfish.style.top = parseInt(bigfish.style.top) - 20 + "px";
    bigfish.style.transform = "rotate(-90deg)";
  } else {
    bigfish.style.top = "0px";
  }
}
function moveRight() {
  if (bigfish.offsetLeft < window.innerWidth - 150) {
    bigfish.style.left = parseInt(bigfish.style.left) + 20 + "px";
    bigfish.style.transform = "rotate(0)";
  } else {
    bigfish.style.left = window.innerWidth - 150 + "px";
  }
}
function moveDown() {
  if (bigfish.offsetTop < window.innerHeight - 200) {
    bigfish.style.top = parseInt(bigfish.style.top) + 20 + "px";
    bigfish.style.transform = "rotate(90deg)";
  } else {
    alert("suicide!");
  }
}
