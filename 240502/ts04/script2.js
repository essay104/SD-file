const userInput = prompt("영단어 입력");

const solution = () => {
  let answer = "";

  for (let k of userInput) {
    if (k === k.toUpperCase()) {
      answer += k.toLocaleLowerCase();
    } else {
      answer += k.toUpperCase();
    }
  }

  return answer;
};

console.log(solution(userInput));
