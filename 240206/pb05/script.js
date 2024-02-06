const items = document.querySelectorAll(".navi li");
const photo = document.querySelector(".photo");

items.forEach((item) => {
  item.addEventListener("mouseover", function() {
    const changeimage = this.getAttribute("data-image");
    photo.style.backgroundImage= 'url(${changeImage})';
  });
  item.addEventListener("mouseleave", fuction() {
    const changeimage = this.getAttribute("data-image"); {
      photo,stylebackgroundImage = ""
    };
  });
});