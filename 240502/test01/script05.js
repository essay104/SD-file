// const rNum = Math.floor(Math.random() * 100);
// const rNum1 = Math.floor(Math.random() * 100);
// const rNum2 = Math.floor(Math.random() * 100);
// const rNum3 = Math.floor(Math.random() * 100);
// const rNum4 = Math.floor(Math.random() * 100);
// const rNum5 = Math.floor(Math.random() * 100);
// const rNum6 = Math.floor(Math.random() * 100);

// const numbers = [rNum, rNum1, rNum2, rNum3, rNum4, rNum5, rNum6];

// console.log(Math.min(rNum, rNum1, rNum2, rNum3, rNum4, rNum5, rNum6));

// console.log(numbers);

// const body = document.querySelector("body");

// body.innerText = Math.min(rNum, rNum1, rNum2, rNum3, rNum4, rNum5, rNum6), numbers;

const arr = [5, 3, 7, 11, 2, 15, 17];

const solution = (arr) => {
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  answer = min;
  return answer;
};

console.log(solution(arr));
