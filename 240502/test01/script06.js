const array = [12, 77, 38, 41, 53, 92, 85];

// console.log(array);

// const array1 = array.filter((number) => number % 2 !== 0);
// // const array2 = array.filter((number) => number % 2 == 0);

// console.log(array1);

const solution = (array) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of array) {
    if (num % 2 === 1) {
      sum += num;
    }

    if (num < min) min = num;
  }

  answer.push(sum);
  answer.push(min);
  return answer;
};

console.log(solution(array));
