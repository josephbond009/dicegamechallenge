
var random = Math.random() * 6;
var randomNumber1 = (Math.floor (random) + 1);
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var random = Math.random() * 6;
var randomNumber2 = (Math.floor (random) + 1);
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");


function rollDice() {

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = ("Draw! Roll dice again.🙂");
  }
  else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = ("🚩Player 1 wins!");
  }
  else {
    document.querySelector("h1").textContent = ("🚩Player 2 wins!");
  }
}

rollDice();
