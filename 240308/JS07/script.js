const items = document.querySelectorAll("article");
console.log(items);
for (let items of items) {
  items.addEventListener("mouseover", (e) => {
    console.log(e.currentTarget.querySelector("video").play());
  });
}
