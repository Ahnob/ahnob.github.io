// // When the user presses any key on the KeyboardEvent, start the game and change the text to level 1
// // We need a keyboard event listener
// We need a function called start game
//  - change the text to level 1
//  - call the generateNextRandomColor function
// When the user clicks on any of the colors
//   - If the game has not started, call the gameOver function
//   - get the color that was clicked on
//   - check if it was the right color by comparing it with the random color that was generated.
//     - increase the level
//     - call generateNextRandomColor again
//   - if it was the wrong color
//     - call the gameOver function
//       - Red background with animation and  a sound
//       - Change the text to Game Over. Press any key to restart

let randomColor = "";
let level = 1;
document.addEventListener("keypress", gameStart);

function gameStart() {
  document.querySelector("#level-title").innerHTML = "Level 1";
  generateNextRandomColor();
}

function generateNextRandomColor() {
  let randomNumber = Math.floor(Math.random() * 4);
  let colors = ["red", "yellow", "blue", "green"];
  randomColor = colors[randomNumber];
  playSoundAndAnimate();
}

function playSoundAndAnimate() {
  console.log(randomColor);
  let audio = new Audio("/sounds/" + randomColor + ".mp3");
  audio.play();
  $("#" + randomColor).animate({ opacity: "0.5" }, 200, function () {
    $("#" + randomColor).animate({ opacity: "1" });
  });
}

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach(function (button) {
  // attach this event listener to the buttons
  button.addEventListener("click", whenUserClicksOnButton);
});

function gameOver() {
  document.querySelector("#level-title").innerHTML =
    "Game Over. Press any key to start";
  document.querySelector("body").classList.add("game-over");
  setTimeout(function () {
    document.querySelector("body").classList.remove("game-over");
  }, 500);
  let audio = new Audio("/sounds/wrong.mp3");
  audio.play();
}

function whenUserClicksOnButton(event) {
  let colorClickedOn = event.target.id;
  if (randomColor === "") {
    gameOver();
  } else if (colorClickedOn === randomColor) {
    generateNextRandomColor();
    level++
    document.querySelector("#level-title").innerHTML = "level", level;
  } else if (colorClickedOn != randomColor) {
    gameOver();
  }
}

