const arrows = document.querySelectorAll(".arrow");
const container = document.querySelector("#container");
let i = 0;
const pics = ["pic-1.jpg", "pic-2.jpg", "pic-3.jpg", "pic-4.jpg"];

container.style.backgroundImage = `url(./imges/${pics[0]})`;
arrows.forEach((arrow) => {
  arrow.addEvenntListner("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }

    container.style.backgroundImage = `url(./imges/${pics[i]})`;
  });
});
