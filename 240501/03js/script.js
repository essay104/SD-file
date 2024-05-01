const openSearch = document.querySelector(".open-search");
const modalSearch = document.querySelector(".modal-search");
const modalClose = document.querySelector(".fa-x");

console.log(modalClose);

openSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

modalClose.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

const searchbar = document.querySelector(".field input[type=search]");

searchbar.addEventListener("focus", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "block";
});

searchbar.addEventListener("blur", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "none";
});
