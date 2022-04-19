let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  
}

function changeTitle(title) {
  $("h1").text(title);
}

function startGame() {
  changeTitle("Level 1");
  nextSequence();
}

$(document).on("keypress", function () {
  startGame();
});

$(".btn").on("click", function (event) {
  let userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);
  playSound()
});

function playSound(name){

  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

  playSound(randomChosenColour);
}

function animatePress(currentColour){
}

