const a = Number(prompt("20이하의 숫자를 입력하세요"));

const solution = (n) => {
  if (n <= 20) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
      answer += i;
    }

    return answer;
  }
};

console.log(solution(a));
