if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice() {
    var random_number1 = Math.floor(Math.random() * 6) + 1;
    var random_number2 = Math.floor(Math.random() * 6) + 1;

    var img1 = "./images/dice" + random_number1 +".png";
    var img2 = "./images/dice" + random_number2 +".png";

    document.querySelector(".img1").setAttribute("src", img1)
    document.querySelector(".img2").setAttribute("src", img2)

    if (random_number1 > random_number2) {
        document.querySelector(".container h1").innerHTML = "Player 1 Wins! 🚩";
    } else if (random_number1 < random_number2) {
        document.querySelector(".container h1").innerHTML = "🚩Player 2 Wins!";
    } else {
        document.querySelector(".container h1").innerHTML = "Draw!";
    }
}

