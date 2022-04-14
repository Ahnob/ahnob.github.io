// let pauseIcon = document.querySelector("#pause-icon");
// let playIcon = document.querySelector("#play-icon");

// let audio = new Audio("music/song.mp3");

// playIcon.addEventListener("click", function () {
//   pauseIcon.style.display = "block";
//   playIcon.style.display = "none";
//   audio.play();n
// });

// pauseIcon.addEventListener("click", function () {
//   playIcon.style.display = "block";
//   pauseIcon.style.display = "none";
//   audio.pause();
//   audio.currentTime = 0;
// });

let audio = new Audio("music/tybello.mp3");
$("#play-icon").on("click", function () {
  $("#pause-icon").show();
  $("#play-icon").hide();
  audio.play();
  $(".container").addClass("playing");
});

$("#pause-icon").on("click", function () {
  $("#play-icon").toggle();
  $("#pause-icon").hide();
  audio.pause();
  $(".container").removeClass("playing");
});
