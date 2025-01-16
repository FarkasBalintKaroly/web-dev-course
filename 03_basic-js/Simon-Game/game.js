var game_pattern = [];
var buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

let randomChosenColor = buttonColors[nextSequence()]

game_pattern.push(randomChosenColor)
