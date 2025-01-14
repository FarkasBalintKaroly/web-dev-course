var getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)

}

randomNumber1 = getRandomNumber(1, 6)
randomNumber2 = getRandomNumber(1, 6)

imageSrc1 = "images/dice" + randomNumber1 + ".png"
imageSrc2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").src = imageSrc1
document.querySelector(".img2").src = imageSrc2

if (randomNumber1 == randomNumber2) {
    // Draw
    document.querySelector("h1").innerHTML = "Draw"
}
else if (randomNumber1 > randomNumber2) {
    // Player 1 wins!
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
    // Player 2 wins!
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}