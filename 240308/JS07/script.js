const items = document.querySelector("article");
const aside = document.querySelector("aside");
console.log(aside);

for (let item of items) {
  item.addEventListener("mouseover", (e) => {
    e.currentTarget.querySelectorAll("video").play();
  });
  item.addEventListener("mouseleave", (e) => {
    e.currentTarget.querySelectorAll("video").pause();
  });
}
item.addEventListener("click", (e) => {
  const title = e.currentTarget.querySelector("h2").innerText;
  console.log(title);
  const text = e.currentTarget.querySelector("p").innerText;
  const vidSrc = e.currentTarget.querySelector("video").getAttribute();

  aside.querySelector("video").play;
  aside.classList.add("on");

  close.addEventListener("clikc", () => {
    aside.classList.remove("on");
    aside.querySelector("video").pause;
  });
});
