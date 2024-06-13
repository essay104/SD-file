const userWord = prompt("문자열을 입력하세요");
const serchWord = prompt("찾고자 하는 단어를 입력하세요.");

const solution = (userWord, serchWord) => {
  let answer = [];
  let p = Number.MAX_SAFE_INTEGER;

  for (x of userWord) {
    if (x === serchWord) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = Number.MAX_SAFE_INTEGER;

  for (let i = userWord.length - 1; i >= 0; i--) {
    if (userWord[i] === serchWord) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};
