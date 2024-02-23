const today = new Date();
const hrs = today.getHours();

const contatiner = document.querySelector("#container");
const newImg = document.createElement("img");
newImg src = hrs < 12  ? "./images/morning.jpg" : "./images/morning.jpg""
contatiner.appendChild(newImg);
