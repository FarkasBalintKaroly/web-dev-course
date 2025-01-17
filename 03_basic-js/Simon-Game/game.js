// Init program
let game_pattern = [];
let buttonColors = ['red', 'blue', 'green', 'yellow'];
let userClickedPattern = [];
let level = 0;
let started = false;

// Function to play sound
function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

// Function to animate pressing the button
function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
};

// Function to generate random number (1-3) then add to game pattern, and animate it
function nextSequence(){
    userClickedPattern = [];
    level += 1;
    $("h1").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    game_pattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
};

// Function to check if answer is correct
function checkAnswer(currentLevel){
    if (game_pattern[currentLevel] == userClickedPattern[currentLevel]) {
        console.log("Success!");
        if (userClickedPattern.length === game_pattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game over! Press any key to restart!");
        startOver();
    };
};

// Function to restart game
function startOver(){
    level = 0;
    game_pattern = [];
    started = false;
};

// Listen to button clicks -- play sound and animate it
$(".btn").on("click", function(){
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

// Start game by the first keypress
$(document).keypress(function(){
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    };
});
