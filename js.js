window.addEventListener("load", start);

const videoScr = document.querySelector("#videoScr");
const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");
const intro = document.querySelector("#intro");

function start() {
  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  intro.classList.remove("hidden");
}

function playVideo() {
  console.log("playVideo");
  if (videoScr.paused == true) {
    videoScr.play();
    console.log(videoScr.paused);
    playBtn.classList.add("hidden");
    intro.classList.add("hidden");
  } else {
    videoScr.pause();
  }
}

function stopVideo() {
  console.log("playVideo");
  videoScr.pause();
  playBtn.classList.remove("hidden");
  intro.classList.remove("hidden");

  videoScr.currentTime = 0;
}
