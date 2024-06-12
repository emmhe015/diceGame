let score1 = 0;
let score2 = 0;

function rollDice(player) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber + ".png";
    var randomImageSource = "assets/images/" + randomDiceImage;

    if (player === 1) {
        document.querySelector(".img1").setAttribute("src", randomImageSource);
        score1 += randomNumber;
        document.getElementById("score1").textContent = score1;
    } else if (player === 2) {
        document.querySelector(".img2").setAttribute("src", randomImageSource);
        score2 += randomNumber;
        document.getElementById("score2").textContent = score2;
    }
}
document.getElementById("rollPlayer1").addEventListener("click", function() {
    rollDice(1);
});

document.getElementById("rollPlayer2").addEventListener("click", function() {
    rollDice(2);
});
