const userNum = prompt("1이상 100이하의 숫자를 입력해주세요");

const arr = [7, 3, 9, 5, 6, 12];

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};

console.log(solution(arr));
