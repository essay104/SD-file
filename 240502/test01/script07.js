// const UserToday = Number(prompt("오늘 날짜를 입력하세요"));

// use = UserToday % 10;

// const arr = [25, 23, 11, 47, 53, 17, 33];

// const solution = (arr, use) => {
//   for (let num of arr) {
//     if (num % 10 === use) return;
//   }
// };

// console.log(solution(arr, use));

const arr = [25, 23, 11, 47, 53, 17, 33];

const day = Number(prompt("오늘 날짜 일의 자리수를 입력!!"));

const solution = (day, arr) => {
  let answer = 0;
  for (let car of arr) {
    if (car % 10 === day) answer++;
  }

  return answer;
};

console.log(solution(arr));
