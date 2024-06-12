function rollDice(player) {
var randomNumber = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "assets/images/" + randomDiceImage;

if (player === 1) {
    document.querySelector(".img1").setAttribute("src", randomImageSource);
} else if (player === 2) {
    document.querySelector(".img2").setAttribute("src", randomImageSource);
}
}