const ball = document.querySelectorAll(".ball");
let ghost = document.querySelector(".ghost");
let random = Math.trunc(Math.random() * 25) + 1;
let body = document.querySelector("body");
const audio = new Audio("sound.mp3");


function playSound(audio) {
  audio.play();
}

function stopSound(audio) {
    audio.pause();
    audio.currentTime = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener("click", function () {
      console.log(i);
      ball[i].src = `balloon_break.png`;
      ghost = document.querySelector(".ghost");
      if (i === random) {
        ghost.classList.remove("hidden");
        body.style.backgroundColor = "black";
        playSound(audio);
      }
    });
  }
});

document.querySelector(".btn").addEventListener("click", function () {
  stopSound(audio);
  random = Math.trunc(Math.random() * 25) + 1;
  document.querySelector(".ghost").classList.add("hidden");
  for (let i = 0; i < ball.length; i++) {
    ball[i].src = `balloon_ok.png`;
  }
});
