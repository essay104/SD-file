const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJuckebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

console.log(menuHome, menuGame, menuJuckebox);

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "color : #000; background: #fff";
  menuGame.style = "color : #fff; background: #fff";
  menuJuckebox.style = "color : #fff; background: #fff";
  // menuHome.style = "";
};
const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuGame.style = "color : #000; background: #fff";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuJuckebox.style = "color : #000; background: #fff";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJuckebox.addEventListener("click", jukeboxChange);
