// const myFunction = (number) => {
//   console.log(number);
//   myFunction(number + 1);
// };

// myFunction(1);

// // 재귀함수의 단점 중 하나!!
// // 브레이크를 걸어주지 않은 무한으로 셀프반복

// //컴퓨터는 재귀함수를 만나면 cpu를 화용해서 계산 !!! => 저장공간 = 콜스택

// //브레이크 = 기저조건!!!= 탈출조건

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   let c = funcB();
//   return a + b + c;
// };

// funcB();

// const myFunction = (n) => {
//   if (n > 3) return;
//   console.log(n);
//   myFunction();
//   myFunction(n + 1);
// };

// myFunction(1);

// 재귀함수는 콜스택의 영역을 많이 차지합니다!!!
// 메모리가 많지 않은 시스템일수록 재귀함수를 사용하는것은 비효율적이다.

// 재귀함수가 빛을 발할때!!
// 절대로 반복문이 따라오지 못하는 순간!!

// 팩토리얼 타임의 연산 작업!!!

// const factorial = (n) => {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(5));

// 재귀함수 vs 반복문 비교!!

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// 상향식 재귀함수
// const myFunction = () => {
//   if (number > 10) return;
//   console.log(number);
//   myFunction(number + 1);
// };

// console.log(myFunction(1));

// [1, 2, 3, 4, 5] => 해당 배열안에 입력되어 있는 숫자를 모두 더하는 하향식 재귀함수를 활용해서 결과값을 도출하세요;

// const arr = [1, 2, 3, 4, 5];

// const sumArr = (arr) => {
//   return sumArr(arr[arr.length - 1] + arr.slice(0, -1));
// };

// console.log(sumArr(arr));

//하노이 탑!!!

// 원반의 개수 : count
// 시작하는 기둥 : from;
// 도착하는 기둥: to;
// 잠시 머물러야 하는 기둥: temp

const hanoi = (count, from, to, temp) => {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};

hanoi(3, "A", "C", "B");
