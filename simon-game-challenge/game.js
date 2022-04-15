// let buttons = document.querySelectorAll(".btn");
// let green = new Audio("sounds/green.mp3");
// $(".green").on("click", function () {
//   $(".green").addClass("pressed");
//   setTimeout(function () {
//     $(".green").removeClass("pressed");
//   }, 100);
//   green.play();
// });

// let red = new Audio("sounds/red.mp3");
// $(".red").on("click", function () {
//   $(".red").addClass("pressed");
//   setTimeout(function () {
//     $(".red").removeClass("pressed");
//   }, 100);
//   red.play();
// });

// let yellow = new Audio("sounds/yellow.mp3");
// $(".yellow").on("click", function () {
//   $(".yellow").addClass("pressed");
//   setTimeout(function () {
//     $(".yellow").removeClass("pressed");
//   }, 100);
//   yellow.play();
// });

// let blue = new Audio("sounds/blue.mp3");
// $(".blue").on("click", function () {
//   $(".blue").addClass("pressed");
//   setTimeout(function () {
//     $(".blue").removeClass("pressed");
//   }, 100);
//   blue.play();
// });

// let btns = document.querySelectorAll(".btn");
// let audio = new Audio("sounds/blue.mp3");
// let numberOfButtons = btns.length;

// for (let i = 0; i < numberOfButtons; i++) {
// //   let btn = btns[i];
//   btns[i].addEventListener("click", function (event) {
//     audio.play();
//   });
// }

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
  let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  console.log("audio");
  audio.play();
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

// document.querySelector(".btn").addEventListener("click", nextSequence);
// function nextSequence() {
//   let green = new Audio("sounds/green.mp3");
// $(".green").on("click", function () {
//   $(".green").addClass("pressed");
//   setTimeout(function () {
//     $(".green").removeClass("pressed");
//   }, 100);
//   green.play();
// });

// let red = new Audio("sounds/red.mp3");
// $(".red").on("click", function () {
//   $(".red").addClass("pressed");
//   setTimeout(function () {
//     $(".red").removeClass("pressed");
//   }, 100);
//   red.play();
// });

// let yellow = new Audio("sounds/yellow.mp3");
// $(".yellow").on("click", function () {
//   $(".yellow").addClass("pressed");
//   setTimeout(function () {
//     $(".yellow").removeClass("pressed");
//   }, 100);
//   yellow.play();
// });

// let blue = new Audio("sounds/blue.mp3");
// $(".blue").on("click", function () {
//   $(".blue").addClass("pressed");
//   setTimeout(function () {
//     $(".blue").removeClass("pressed");
//   }, 100);
//   blue.play();
// });
// }
