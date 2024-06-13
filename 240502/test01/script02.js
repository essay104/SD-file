//삼각형이 완성되기 위한 전제조건!!!

//3개의 변 중 가장 긴 변의 길이가 나머지 2개의 변의 길이의 합과 같거나 크면 삼각형이 될 수 없음!!

const a = Number(prompt("첫번째 변의 길이를 입력해주세요 (cm)"));
const b = Number(prompt("두번째 변의 길이를 입력해주세요 (cm)"));
const c = Number(prompt("세번째 변의 길이를 입력해주세요 (cm)"));

// const solution = (a, b, c) => {
//   let answer;

//   if (a > b + c || b > a + c || c > a + b) {
//     answer = "no";
//   } else {
//     answer = "yes";
//   }
//   return answer;
// };

// console.log(solution(a, b, c));

const solution = (a, b, c) => {
  let answer = "yes";
  let max;
  let tot = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = c;
  }

  if (c > max) max = c;

  if (tot - max <= max) answer = "no";

  return answer;
};

console.log(solution(a, b, c));
