let game_pattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    game_pattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
};

$(".btn").on("click", function(){
    let userChosenColor = this.attr("class");
    alert(userChosenColor);
    // alert("Hello")
});