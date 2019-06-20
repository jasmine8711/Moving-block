const game = document.getElementById("game");
const bigfish = document.getElementById("bigfish");
const point = document.getElementById("point");
const intro = document.getElementById("intro");
const btn = document.getElementById("btn");
btn.onclick = () => {
  intro.classList.add("hidden");
};
//bigfish animation
setInterval(() => {
  bigfish.style.backgroundImage = "url('bigfish1.png')";
  setTimeout(() => {
    bigfish.style.backgroundImage = "url('bigfish.png')";
  }, 500);
}, 1000);

let score = 0;
let randomX;
let randomY;

//creat the fish
const smallfish = document.createElement("img");
smallfish.classList.add("smallfish");
smallfish.src = "smallfish.png";
game.appendChild(smallfish);

function creatSmallfishPos(x, y) {
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);
  if (randomY >= window.innerHeight - 200) {
    smallfish.style.top = window.innerHeight - 210 + "px";
  } else if (randomX > window.innerWidth - 47) {
    smallfish.style.left = window.innerWidth - 47 + "px";
  } else {
    smallfish.style.top = randomY + "px";
    smallfish.style.left = randomX + "px";
  }

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
  //creat a bigfish close mouse

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
      bigfishCenterX > newfish.offsetLeft - 20 &&
      bigfishCenterX < newfish.offsetLeft + 60 &&
      bigfishCenterY > newfish.offsetTop + 10 &&
      bigfishCenterY < newfish.offsetTop + 60
    ) {
      score++;
      point.innerText = score;
      let randomX = Math.floor(Math.random() * window.innerWidth);
      let randomY = Math.floor(Math.random() * window.innerHeight);
      creatSmallfishPos(randomX, randomY);
    }
  }
  collision(newFish);
}

function moveLeft() {
  if (bigfish.offsetLeft > 0) {
    bigfish.style.left = parseInt(bigfish.style.left) - 10 + "px";
    bigfish.style.transform = "rotateY(180deg)";
  } else {
    console.log(bigfish.offsetLeft);
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
  if (bigfish.offsetLeft < window.innerWidth - 100) {
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
    gameover.classList.remove("hidden");
  }
}
//creat gameover page
const gameover = document.createElement("img");
gameover.classList.add("gameover", "hidden");
gameover.src = "gameover.jpg";
game.appendChild(gameover);

gameover.addEventListener("click", () => {
  intro.classList.remove("hidden");
  gameover.classList.add("hidden");
  score = 0;
  point.innerText = score;
  init();
  creatSmallfishPos(randomX, randomY);
  collision(newFish);
});
