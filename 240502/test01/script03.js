// 연필 1다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요

//첫번째 줄에 1000이하의 자연수 N이 입력된다

//첫번째 줄에 필요한 다스 수를 출력합니다.

const a = Number(prompt("학생수를 입력하세요"));

console.log(a);

const solution = (a) => {
  let result = Math.floor(a / 12)+1;

  return result;
};

console.log(solution(a));
