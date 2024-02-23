const btn = document.querySelector("#view");
const detail = document.querySelector("#detail");

btn.onclick = () => {
  detail.classList.toggle("hidden");
  btn.style.background = "#000";
  btn.style.color = "#fff";
};

// const colorChange = () => {
//   btn.style.background = "#000";
//   btn.style.color = "#fff";
// };

// btn.onclick = colorChange;
