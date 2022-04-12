let pauseIcon = document.querySelector("#pause-icon");
let playIcon = document.querySelector("#play-icon");

let audio = new Audio("music/song.mp3");

playIcon.addEventListener("click", function () {
  pauseIcon.style.display = "block";
  playIcon.style.display = "none";
  audio.play();
});

pauseIcon.addEventListener("click", function () {
  playIcon.style.display = "block";
  pauseIcon.style.display = "none";
  audio.pause();
});
