//1. 가상 클래스 적용하기
//2. dom에서 요소 찾아오기

const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");

button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
