const btn = document.querySelector(".menu_toogle_btn")
const nav = document.querySelector(".nav")

btn.addEventListener("click", () => { 
  nav.classList.toggle("active");
});