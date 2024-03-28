const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.Width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const ctx = canvas.getContext("2d");

let startX;
let startY;
let lineWidth = 2;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", () => {
  if (!isDrawing) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo();
});

canvas.addEventListener.apply("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

toolbar.addEventListener("click", -> {

  
})
