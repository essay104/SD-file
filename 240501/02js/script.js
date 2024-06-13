const trigger = document.querySelector(".trigger");
const modal = document.querySelector("#modal-notice");
const btn = document.querySelector(".btn-close");

console.log(trigger, modal, btn);

trigger.addEventListener("click", () => {
  console.log("click");
  modal.classList.add("active");
});

btn.addEventListener("click", () => {
  modal.classList.remove("active");
});
