let score1 = 0;
let score2 = 0;

// A function to make random dice.png appear, numbers between 1-6
function rollDice(player) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber + ".png";
    var randomImageSource = "assets/images/" + randomDiceImage;

// Updates the score to each player 
    if (player === 1) {
        document.querySelector(".img1").setAttribute("src", randomImageSource);
        score1 += randomNumber;
        document.getElementById("score1").textContent = score1;
    } else if (player === 2) {
        document.querySelector(".img2").setAttribute("src", randomImageSource);
        score2 += randomNumber;
        document.getElementById("score2").textContent = score2;
    }
    updateWinner();
}
// Updates the h1 depending on which player currently has the highest score
function updateWinner() {
    const h1 = document.querySelector("h1");
    if (score1 > score2) {
        h1.textContent = "Player 1 is winning!";
    } else if (score2 > score1) {
        h1.textContent = "Player 2 is winning!";
    } else {
        h1.textContent = "It's a tie!";
    }
}

// Makes the dices to roll when clicking the button
document.getElementById("rollPlayer1").addEventListener("click", function() {
    rollDice(1);
});

document.getElementById("rollPlayer2").addEventListener("click", function() {
    rollDice(2);
});
