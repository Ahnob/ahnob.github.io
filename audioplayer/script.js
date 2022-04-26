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
// 




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
  "Sia-Alive", " tybello", "Passenger", "Bruno_Mars", "Celine-Dion","jessiej","Ann-Marie"];

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
  
});


// prevBtn.addEventListener("click", prevSong)
// nextBtn.addEventListener("click", nextSong)

// previous and next buttons

// let songIndex = 2;

// loadSong(songs[songIndex]);

// function loadSong(song){
//   tittle.innerText = song;
//   audio.src = `music/${song}.mp3`;
//   cover.src = `covers/${song}.jpg`;
// }

// // In other to get the previous song wen the backwards key is clicked

// function prevSong(){
//   songIndex --
//   if (songIndex < 0){
//     songIndex = songs.length -1;
//   }

//   loadSong(songs[songIndex]);
//   playSound();
// }

// function nextSong() {
//   songIndex++;
//   if (songIndex > songs.length -1) {
//     songIndex = 0;
//   }

//   loadSong(songs[songIndex]);

//   playSound();
// }

// // implementing the progress Bar by adding an eventListener to the audio tag
// // and the event called timeout

// audio.addEventListener("timeupdate", updateProgress);

// // While your music is playing, you may want to click anywhere on the progress bar and have the song skip to that point.

// progressContainer.addEventListener("click", setProgress);


// // creating setProgress function

// function setProgress(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const duration = audio.duration;

//   audio.currentTime = (clickX / width) * duration;
// }

// // The last functionality we want to implement is making the music player automatically play the next song when the current song ends

// audio.addEventListener("ended", nextSong);


// changing the pause and play


// playBtn.addEventListener('click', () =>{
//   const isPlaying = musicContainer.classList.contains("play");

//   if (isPlaying){
//     pauseSong();
//   } else {
//     playSong();
//   }
// });

// function playSong(){
//  musicContainer.classList.add("playing")
//  playBtn.querySelector("i.fas").classList.remove("fa-play");
//  playBtn.querySelector("i.fas").classList.add("fa-pause");

//  audio.play();

// }


// function pauseSong() {
//   musicContainer.classList.add("playing");
//   playBtn.querySelector("i.fas").classList.add("fa-play");
//   playBtn.querySelector("i.fas").classList.remove("fa-pause");

//   audio.pause();
// }

