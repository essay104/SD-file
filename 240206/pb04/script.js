$(".stars .fas").click(function() {
  $(this).addClass("active");
  $(this).prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
  
    const num = $(this).index();
    const starRate = num + 1;
    $(".print").text(starRate);

//     if (starRate === 1) {
//       $(".print").html("별로에요!" + '<img src="./images/star-lv1.png"/>');
//     } else if  (starRate === 2) {
//       $(".print").html("별로에요!" + '<img src="./images/star-lv2.png"/>');
// });

//javascript
const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = [
  "./images/star-lv1.png",
  "./images/star-lv2.png",
  "./images/star-lv3.png",
  "./images/star-lv4.png",
  "./images/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = fuction() {
  let siblings = [];
  let current = this.previousElementSiblingAll
  while(current !==null) {
    siblings.push(current);
    current = current.previousElementSibleings;
  }
};

stars.forEach((star) => {
  star.addEventListener("click", fuction () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.foreach(function (prestar)) {
      preStars.classList.add("active");;
    }
    const num = Array.from(stars).index0f(this);
    const starRate = num +1;
    If (starRate === 1) {
      print.innerHTML = "별롱에오"} <igm src=$imgs[0]}>
   }
  });
});