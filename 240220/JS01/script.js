// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img");
// const users = document.querySelectorAll(".user");
// const address = users[1];

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementsById("profile");
// const users = document.getElementsByClassName("user");

// console.log(h1);
// console.log(profile);
// console.log(users);

// const desc = document.querySelector("#desc");

// desc.innerText = "이름 : 홍길동";
// const disc = desc.innerText;
// const descHtml = dec.innerHTML;

// const descContext = desc.textContent;
// console.log(descContext);

// 이벤트 핸들러 => 이벤트 작동 실행!!

// const title = document.querySelector("h1");

// title.onclick = function() {
//   title.innertexxt  "마이 프로필"-
// };

// title.onclick = () => (title.innerText = "마이 프로필");

// const userName = documnet.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>영심이</b>");

// const pfImg = document.querySelector("profile img");
// pfImg.onclick = () => (pfImg.src = "./imges/pf2/png");

// const title = document.querySelector("h1");
// const userName = document.querySelectorAll(".user")[0];
// console.log(userName);

// title.onclick = () => {
//   title.style.backgroundColor = "black";
//   title.style.color = "#fff";
// };

// usersName.onclick = () => {
//   userName.classList.add("clicked");
// };

// const clickedTrue = userName.classList.contains("clicked");
// console.log("clickedTure")
// ;

// userName.onlick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

userName.onclick = () => {
  userName.classList.toggle("clicked");
};