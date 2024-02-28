// 객체!!
// 프로퍼티!!
// 프로퍼티 = 속성
// key : value 1쌍 => 프로퍼티

//객체 만들기
const book1 = {
  title: "자바스크립트",
  pages: 648,
};

//온점 표기법
console.log(book1.title);

//대괄호 표기법
console.log(book1["pages"]);

//재할당
book1.pages = 50;

console.log(book1);

//키 추가하기
book1.author = "David";
console.log(book1);

new Date();
new Object();
new Array();

// 프로토타입 = 붕어빵 틀
// 인스턴스 = 붕어빵 틀 활용해서 만들어진 붕어빵

const book2 = new Object();
console.log(typeof book2);

book2.title = "Typescript";
book2.pages = 500;
book2.author = "Alice";

console.log(book2);

//객체 삭제하기
delete book2.pages;
console.log(book2);
