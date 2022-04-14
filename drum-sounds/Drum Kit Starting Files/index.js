// detecting buttonpressed
// This is for a single button
// document.querySelectorAll("button").addEventListener("click", handleClick);
let drums = document.querySelectorAll(".drum");

let numberOfButtons = drums.length;

for (let i = 0; i < numberOfButtons; i++) {
  let drum = drums[i];

  drum.addEventListener("click", handleClick);
  function handleClick() {
    // alert("We good");

    // this.style.color = "pink";

    let buttoninnerHTML = this.innerHTML;
    makesound(buttoninnerHTML);
    buttonanimation(buttoninnerHTML);
  }
}
// The event helps show what triggered the event
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonanimation(event.key);
});

// figuring out which key was pressed

function makesound(key) {
  switch (key) {
    case "w":
      let kick = new Audio("sounds/Kizz-Daniel-Lie.mp3");
      kick.play();

      setTimeout(function () {
        kick.pause();
      }, 2000);
      
      break;

    case "a":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(key);
  }
}

function buttonanimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
