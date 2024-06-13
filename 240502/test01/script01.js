// const input = prompt("100 이하의 첫번째 숫자를 입력하세요");
// const input2 = prompt("100 이하의 두번째 숫자를 입력하세요");
// const input3 = prompt("100 이하의 세번째 숫자를 입력하세요");

// const body = document.querySelector("body");

// const values = [input, input2, input3];

// values.forEach((value) => {
//   if (value < 100) {
//     body.innerText = Number(Math.min(value));
//   } else {
//     body.innerText ="100보다 작은 수를 입력해주세요"
//   }
// });

const a = Number(prompt("첫번째 숫자"));
const b = Number(prompt("두번째 숫자"));
const c = Number(prompt("세번째 숫자"));

const solution = (a, b, c) => {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;

  return answer;
};

console.log(solution(a, b, c));
