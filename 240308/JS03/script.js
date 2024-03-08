// JS 언어 이야기
// 객체 지향 언어

// 외부에서 Json 형식의 데이터를 가져와서 웹브라우저에 출력해야하는 상황

// JS 언어 => 태생적으로 동기 처리 방식

// 동기 => 순차적으로 무언가를 처리한다는 뜻!!
// 예시 => 커피숍

// 1) 콜백함수
// 2) Promise 객체
// 3) async, await 키워드 사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {});
// };
// const displayC = () => {
//   console.log("c");
// };

// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// const display = (result) => {
//   console.log(`${result} 준비 완료`);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", "display");

// Promise 객체
