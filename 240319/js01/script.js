// 마우스의 움직임에 따라서 좌표값이 변경되고 있다는 사실을 확인해야한다!!

//window 객체 안에 포함되어있는 이벤트

// 현재 마우스가 위치해있는 좌표값
// 이동 후 마우스가 위치해있는 좌표값

const cursorItem = document.querySelector(".cursorItem");
const buttonAll = document.querySelectorAll("a");
const circle = cursorItem.querySelector(".cisrcle");

let x = 0,
  y = 0;

let targetX = 0,
  targetY = 0;

const speed = 0.5;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.trasnform = "scale(0.3)";
  });
  button.addEventListener("mouseleave", () => {
    circle.style.trasform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${x}px, ${y}px)`;

  window.requestAnimationFrame(loop);
};

loop();
