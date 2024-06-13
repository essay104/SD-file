const tabBtns = document.querySelectorAll(".tab-btn a");
console.log(tabBtns);

tabBtns.forEach((tabBtns) => {
  tabBtns.addEventListener("click", function () {
    tabBtns.forEach((otherbtns) => {
      otherbtns.classList.remove("active");
    });
    this.classList.add("active");
  });
});
