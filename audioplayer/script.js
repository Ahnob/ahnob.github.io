const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play-icon");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");

// const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const rotate = document.querySelector("#rotate");

const songs = [
  "Sia-Alive",
  "tybello",
  "Passenger",
  "Bruno_Mars",
  "Celine-Dion",
  "jessiej",
  "Ann-Marie",
];

// Keeping track ofsongs
let songIndex = 0;

let audio = new Audio("/music/Sia-Alive.mp3");
// audio.play();

// loading songs initially
loadSong(songs[songIndex]);

// update songs
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `covers/${song}.jpg`;
}

// Adding Event Listeners for previous and forward icons
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// To get the previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);
  playPrev();
}
// To get the next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  playNext();
}

console.log(audio);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

$("#play-icon").on("click", function () {
  $("#pause-icon").show();
  $("#play-icon").hide();
  audio.play();
});

$("#pause-icon").on("click", function () {
  $("#play-icon").show();
  $("#pause-icon").hide();
  audio.pause();
});
// To make the song go to the next one when a sng finishes
audio.addEventListener("ended", nextSong);
