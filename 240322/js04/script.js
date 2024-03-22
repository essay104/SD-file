const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const audio = frame.querySelectorAll("audio");

// 개별 article의 각도 정의
const deg = 45;

// 인덱스 값을 정의
let i = 0;
const len = lists.length - 1;

// 프레임 내 뮤직패널 인덱스 값 정의
let num = 0;

lists.forEach((list) => {
  list.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  i++;

  const pic = list.querySelector(".pic");

  pic.style.backgroundImage = `url(./img/member${i}.jpg)`;

  const pause = list.querySelector(".pause");
  const play = list.querySelector(".play");
  const load = list.querySelector(".load");

  play.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", (e) => {
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", () => {
    e.currentTarget
      .closest("article")
      .querySelector(".pick")
      .classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load;
    e.currentTarget.closest("article").querySelector("audio").play;
  });
});

const innitMusic = () => {
  audio.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousSibling.classList.remove("on");
  });
};

const activation = (active, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[active].classList.add("on");
};

prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});

innitMusic();
