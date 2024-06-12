function rollDice(player)
var randomNumber = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "assets/images/" + randomDiceImage;



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}