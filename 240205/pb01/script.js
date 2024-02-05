// html에서 작성한 선택자를 불러올 때 항상 앞에 $라는 특수 기호를 항상 쓴다//
// template literal => js $

// $(".testimonial-pic img").click(function () {
//   $(this).addClass("active");
//   $(this).siblings().removeClass("active");
//   $(".testimonial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
// });

const pics = document.querySelectorAll(".testimonial-pic img");
const content = document.querySelectorAll(".testimonial .content");

pics.forEach((pic) => {
  pic.addEventListener("click", function() {
    function siblings(t) {
      const children = t.parentElement.children;
      for(let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");
  });
});
