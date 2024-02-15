// const headtitle = document.querySelector("#headtitle");
// console.log("#headtitle");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 1000) {
//     headtitle.classList.add("active");
//   } else {
//     headtitle.classList.remove("active");
//   }
// });

$("nav a").click(function (e) {
  $.scrollTo(this.hash || 0, 1000);
  e.preventDefault();
});
