const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play-icon");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = [
  "Sia-Alive", " tybello", "Passenger", "Bruno_Mars", "Celine-Dion","jessiej", "Ann-Marie"];

// Keeping track ofsongs
let songIndex = 0

// loading songs initially
loadSong(songs[songIndex]);

// update songs
function loadSong(song){
  title.innerText = song
  audio.src= `music/${song}.mp3`;
  cover.src = `covers/${song}.jpg`;
}

// adding click events to the forward and backward keys
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);



// Adding Event Listeners


// To get the previous song
function prevSong(){
  songIndex--;

  if (songIndex < 0){
    songIndex = songs.length-1;
  }

  loadSong(songs[songIndex]);

  playSong();
}
// To get the next song 
function nextSong(){
  songIndex++

  if (songIndex > songs.length-1){
    songIndex = 0
  }

  loadSong(songs[songIndex])

  playSong()
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
  
})

function updateProgress (e){
  const {uation, currentTime} = e.srcElement
  const progressPercent = {currentTime / duration} =100
  progress.style.width= `${progreePercent}%`
}

