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

// let audio = new Audio("music/tybello.mp3");
$("#play-icon").on("click", function () {
  $("#pause-icon").show();
  $("#play-icon").hide();
  audio.play();
  $(".container").addClass("playing");
});

$("#pause-icon").on("click", function () {
  $("#play-icon").show();
  $("#pause-icon").hide();
  audio.pause();
  $(".container").removeClass("playing");
});




const musicContainer = querySelector("#music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const currTime = document.querySelector("#currTime");
const durTime = document.querySelector("#durTime");

const songs = [
  "Sia - Alive", " TY-Bello - Ekundayo ft Olufunmi", "Passenger - Let her go", "Bruno-Mars - Locked out of Heaven", "Celine-Dion - Falling into you"
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song){
  tittle.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `covers/${song}.jpg`;
}

// In other to get the previous song wen the backwards key is clicked

function prevSong(){
  songIndex --
  if (songIndex < 0){
    songIndex = songs.length -1;
  }

  loadSong(songs[songIndex]);
  playSound();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length -1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSound();
}

// implementing the progress Bar by adding an eventListener to the audio tag
// and the event called timeout

audio.addEventListener("timeupdate", updateProgress);

// While your music is playing, you may want to click anywhere on the progress bar and have the song skip to that point.

progressContainer.addEventListener("click", setProgress);


// creating setProgress function

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

// The last functionality we want to implement is making the music player automatically play the next song when the current song ends

audio.addEventListener("ended", nextSong);




