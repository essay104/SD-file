// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// async function displayHello01() {
//   console.log("Hello");
// }

// displayHello01();

// 순수 Promise 객체를 활용한 비동기처리 실행문

// const whatYourFavorite = () => {
//   const fav = "javascript";
//   return new Promise((resolve, reject) => resolve(fav));
// };

// const displaySubject = () => {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// };

// whatYourFavorite().then(displaySubject).then(console.log);

// async 예약어를 활용해서 Promise 객체 생성 및 사용!!

// async function whatsYourFavorite() {
//   const fav = "Javascript";
//   return fav;
// }

// async function displaySubject() {
//   return `Hello, ${subject}`;
// }

// whatsYourFavorite().then().then(console.log);

async function whatYourFavorite() {
  const fav = "Typescript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();
