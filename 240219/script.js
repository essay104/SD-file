// prompt();
// alert();
// document.wirte();

// 함수의 생김새!!
// 단어(=키워드)() => 함수!!

// 함수가 작동하려면 무엇이 필요할까?
// 1) 함수를 구현 = 제작
// 2) 함수를 호출 = 실행

// 함수를 구현하려면 어떻게 해아할까?
// 함수를 구현하는 방법은 총 3가지!!
// 1) 클래스 함수를 구현하는 방법
// 2) 익명 함수를 구현하는 방법
// 3) 화살표 함수를 구현하는 방법

// 1~5까지 더한 숫자를 구하시오
// 초급 레벨 단계
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// 중급 레벨 단계
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

//한계 매 상황에 맞춰서 신규 코드 생성 => 코드 재활용 불가

// 고급 레벨 단계(함수)
// 재활용이 가능한 코드 업그레이드
// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
// }

// calcSum(20);

// const userNumber01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNumber02 = Number(prompt("두번째 숫자를 입력하세요"));

// 클래스 함수

// function sum(a, b) {
//   const result = a + b;
//   alert('두 수의 합은 ${result}입니다');
// }

// 익명 함수

// const sum = function (a, b) {
//   const result = a + b;
//   alert("두 수의 합은 ${result}입니다");
// };

// 화살표 함수
// const sum = (a,b) => {
//   const result = a + b;
//   alert("두 수의 합은 ${result}입니다");
// }

// sum(userNumber01, userNumber02);

// return문
// 함수의 결과값을 바깥으로 꺼내오는데 사용

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// calcSum(num);
// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);

// 기본 매개 변수

// const userNumber01 = Number(prompt("첫번째 숫자"));
// const userNumber02 = Number(prompt("두번째 숫자"));
// const userNumber03 = Number(prompt("세번째 숫자"));

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(userNumber01, userNumber02, userNumber03));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; 1 <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
// }

// calcSum(5);

// JS 를 작성하다보면 큰 이슈!!
// JS는 엄청 큰 문제점을 발견하면 => console창을 통해서 알려줍니다.
// 아주 사소한 문제점은 알려주지 않음!! ex (오타 등등)
// 코드상의 문제가 발생 => 버그가 발생!!
// JS => 실무
// 실무에서 JS x => TS
// 보다 효율적으로 버그를 찾는 방법!!

// const hi = "hello"

// function greeting () {
//   console.log(hi);
// }
// .
// greeting {};

// let i = "hello";

// function change() {
//   hi = "bye"
// };

// console.log(h1);
// change();
// console.log(h1);
// change();

// const factor = 5;

// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

// JS 권장사항!!
// 1) var보다는 let, const키워드로 변수를 선언해라!
// 2) 가급적이면, 전역 스코프의 변수 설정은 삼가해라
// 3) 그래서 var, let 보다는 const에 적응해라!!
// 즉시 실행 함수!!

///Hoistiong 기법//
//무언가를 끌어올리다!!//
//class 함수는 hoisting / 화살표 & 익명 x//

// example();

// const example = () => {
//   console.log("hellow");
// };

// function example

//화살표 함수에서는!//
//화살표 함수에서는 매개변수가 좋재하지 않을 경우에는 실행물을 보호하는 총괄호 & 값을 변환시켜주느 return문을 생략해도 문제없음
//화살표 함수가 태어난 경위 : (ES6문법)
//1) 반복적으로 사용되는 function이라는 키와 & 함수명을 생략하기 위해
//2) JS의 근본없는 구현 & 호출부의 선서를 명확하게 정의하기 위한 목적
//3) 함수의 실행문에서 굳이 중괄호와 returen문을 사용하지 않아도 구현할 수 있도록 해주기 위한 목적!!!!

// 변수 선언 시, let, const, var를 사용하지 않으면 무조건 전역변수화 된다.
// function greeting() {
//   hi = "hello";
// }

// const hi = "hello";
// function greeting() {}

// greeting();
// console.log(hi);

// 콜백함수
// 함수 안에 또 다른 함수를 호출할 때 부르는 용어

// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 파이팅입니다");
// };
// btn.addEventListener("click", () => {
//   alert("오늘도 파이팅합니다");
// });
// const showData = (name, data) => {
//   alert(`안녕하세요 ${}님 나이가
// ${age}살 이군요`)
// }

// const getData = (callback) {
//   const username = prompt ("이름을 임력하세요");
//   const usersAge = prompt("나이를 입력하세요");
//   callback(username, usersAge);
// }

// 1) 함수를 변수에 값으로 할당할 수 있어야 한다!
// 2) 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야 한다!
// 3) 함수가 또다른 함수의 return 안에 반환값으로 들어올 수 있어야 한다! => 고차함수

// const init = () => {
//   return function(a, b) {
//     return a - b > 0 ? a - b : b -a;
//   };
// };

// console.log('init(30, 20) : ${init(30, 20)}');

// const addNum = (a, b) => a + b;

// console.log(addNum(1, 3, 5, 7));

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 좋아하는 과일은 ${first}`;
//   const str01 = `두번째로 좋아하는 과일은 ${second}`;
//   return str01;
// };

// console.log(displayFavorites("사과", "포도", "토마토"));

// window 운영체제 => 내장함수!!
// JS => 싱글스레드로 작동하는 객체지향 프로그래밍 언어
// 싱글 => 1 / 스레드 => 길 => 1차선 통행!!
// 1차선 => 사고

// <-> 멀티스레드 : 복수차선
// 동시성x / 비동기 처리x
// 로딩 스피너!!

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수!

// const greeting = () => {
//   console.log("안녕하세요");
// };

/// 1000밀리초 = 1초

// setInterval(() => {
//   console.log("안녕하세요");
// }, 2000);

// 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수 => clearInterval()
// 단락회로평가!!

// let counter = 0;

// let timer = setInterval(() => {
//   console.log("Hi yo");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수
// heap / callstack / Que

setTimeout(() => {
  console.log("안녕하세요");
}, 3000);
