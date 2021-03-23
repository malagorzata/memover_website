window.addEventListener("load", start);

let videoScr = document.querySelector("#videoScr");
let playBtn = document.querySelector("#playBtn");
let stopBtn = document.querySelector("#stopBtn");
let intro = document.querySelector("#intro");

function start() {
  //   playBtn.style.backgroundImage = "url(play.svg)";
  //   stopBtn.style.backgroundImage = "url(stop.svg)";

  playBtn.addEventListener("click", playVideo);
  stopBtn.addEventListener("click", stopVideo);
  document.querySelector("#intro").classList.remove("hidden");
}

function playVideo() {
  console.log("playVideo");
  if (videoScr.paused == true) {
    videoScr.play();
    // playBtn.style.backgroundImage = "url(stop.svg)";
    console.log(videoScr.paused);
    document.querySelector("#playBtn").classList.add("hidden");
    document.querySelector("#intro").classList.add("hidden");
  } else {
    videoScr.pause();
    // playBtn.style.backgroundImage = "url(play.svg)";
  }
}

function stopVideo() {
  console.log("playVideo");
  videoScr.pause();
  document.querySelector("#playBtn").classList.remove("hidden");
  document.querySelector("#intro").classList.remove("hidden");

  videoScr.currentTime = 0;
  //   playBtn.style.backgroundImage = "url(play.svg)";
}
