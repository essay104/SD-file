//객체 중첩 !!

// for (let i = 0; 0 < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }

// if (true) {
//   if (true) {
//     console.log("ture");
//   }
// }

// const student = {
//   name: "david",
//   score: {
//     history: "85",
//     science: "94",
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// window.document.write();

//매서드 = 함수
// console.log(student.score.history);
// console.log(student.score.average());

// const book3 = {
//   title: "파이썬",
//   pages: 360,
//   buy: function () {
//     console.log("이 책을 구입했습니다");
//   },
// };

// console.log(book3.buy());

//this
//1) addEventListener => 콜백함수 / 화살표함수 => window
//2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위 요소
//3) 객체 메서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소
//4) 객체 메서드 함수를 생성할 때 / 화살표함수 => this => window

// const book4 = {
//   title: "HTML5 + CSS3",
//   pages: 500,
//   author: "Peter",
//   done: false,
//   finish: function () {
//     this.done === true ? console.log("읽는 중") : console.log("완독");
//   },
// };

// book4.finish();

//원시타입!! (숫자, 문자, 논리) primitive
// 객체 => 참조타입!! reference
// 원본 데이터 자료 && 사본 데이터 자료

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publicing: "2024-02-28",
//   price: 30000,
// };

//커스터마이징 된 객체를 생성!!!
//생성자 "함수"!!
//함수이름 첫글자 => 대문자 입력!!
//생성자 함수 = 붕어빵 틀
//만들어질 객체 = 붕어빵

function Book(title, pages, done = false) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  this.finish = function () {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  };
}

const book1 = new Book("자바스크립트", 648, false);
const book2 = new Book("파이썬", 360, true);

console.log(book2);

// class

class Book2 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done === false ? (str = "읽는 중") : (str = "완독");
  }
}

const book4 = new Book2("html5", 380, true);
console.log(book4);
