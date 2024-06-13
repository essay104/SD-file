const arr = ["5", "teacher", "time", "student", "beautiful", "good"];

const solution = (arr) => {
  let answer = "";

  let max = Number.Min_SAFE_INTEGER;

  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
};

console.log(solution(arr));
