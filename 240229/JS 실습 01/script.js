//마우스 오버했을때 가상클라스 부여
//마우스 땟을따 가상클라스 제거

const application = document.querySelector(".application");
const img = document.querySelectorAll("img");
const body = document.querySelector("body");

console.log(img);

// application.onclick = () => {
//   if (!application.classList.contains("app-ui")) {
//     application.classList.add("app-ui");
//   } else {
//     application.classList.remove("app-ui");
//   }
// };

application.addEventListener("click", () => {
  application.classList.toggle("app-ui");
  body.classList.toggle("bg-change");
});
