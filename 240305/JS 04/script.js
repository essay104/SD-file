// React => 구조 분해 할당!!

// const fruits = ["사과", "복숭아"];

// const apple = fruits[0];
// const peach = fruits[1];

// const [apple, peach] = fruits;

// console.log(apple, peach);

const [teacher, ...sturdents] = ["park", "kim", "choi", "Lee"];

console.log(teacher, sturdents);

const member = {
  name: "kim",
  age: 25,
};

const { name: userName, age } = member;
console.log(name, age);

// 객체의 구조분해할당 시, 반드시 유의사항!!
// 구조분해할당 값을 전달받을 변수 이름 = 객체의 키명과 동일해야 한다.

const student = {
  name: "슛돌이",
  score: {
    history: 85,
    science: 94,
  },
  freinds: ["kim", "Lee", "Park"],
};

const {
  name,
  score: { history, science },
  frieds,
} = student;

console.log(history, f2);
