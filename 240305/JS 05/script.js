const button = document.querySelector("button");

const togglePlay = () => {
  const video = document.querySelector("video");
  if (video.paused) {
    button.innerText = "Pause";
    video.play();
  } else {
    video.pause();
    button.innerText = "Play";
  }
};

button.addEventListener("click", togglePlay);
