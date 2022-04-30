const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play-icon");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const rotate = document.querySelector("#rotate")




const songs = [
  "Sia-Alive", "tybello", "Passenger", "Bruno_Mars", "Celine-Dion","jessiej", "Ann-Marie"];


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

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove(fa-play)
    playBtn.querySelector('i.fas').classList.add('fa-pause')
  
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.add(fa-play)
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
  
}


playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play")

  if(isPlaying){
    pauseSong()

  }else{
    playSong()
  }
})

// Making it 
// rotate.addEventListener("click", function () {
//   document.querySelector("#sample").classList.add("rotating");
// });

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

  audio.play();
}
// To get the next song 
function nextSong(){
  songIndex++

  if (songIndex > songs.length-1){
    songIndex = 0
  }

  loadSong(songs[songIndex])

  audio.play()
}

function updateProgress(e) {
  const {duration, currentTime}= e.srcElement
  const progressPercent = (currentTime/duration) * 100
  progress.style.width = `${progressPercent}%`
}

function setProgress(e){
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width)* duration
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
// To make the song go to the next one when a sng finishes
audio.addEventListener("ended", nextSong);


// audio.addEventListener('timeupdate', updateProgress)

// progressContainer.addEventListener("click", setProgress)



// function updateProgress (e){
//   const {duration, currentTime} = e.srcElement
//   const progressPercent = (currentTime / duration) =100
//   progress.style.width= `${progressPercent}%`
// }

// function setProgress(e){
//   const width = this.cleanWidth
//   const clickX = e.offSetX
//   const duration = audio.duration

//   audio.currentTime = (clickX/width) * duration

// }



// // to Make the song go to the next when it ends
//  audio.addEventListener(`ended`, nextSong );