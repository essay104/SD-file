// 사용자 키 & 몸무게
// (몸무게 / 키 100을 나눔 => 제곱)

// 키 170 => 170 / 100
// 몸무게 73
// 73 / (1.7 * 1.7)

// document에서 입력을 위해 #height를 불러온다
// document에서 입력을 위해 #weight를 불러온다
// document에서 트리거를 위해 #clac를 불러온다
// document에서 출력을 위해 result를 불러온다

// 사용자에게 매개변수 height에 들어갈 인수를 받는다
// 사용자에게 매개변수 weight에 들어갈 인수를 받는다
// 함수에 사용자에게 받은 값을 넣어 계산식을 만든다.
// 계산식이 트리거 calc로 실행되게 한다
// calc로 계산된 결과값이 result로 출력되게 한다.

// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const calc = document.querySelector("#calc");
// const result = document.querySelector(".result");

// const calc_height = () => {

// };

// 1. height & weight 값 정의하기
// 2. Button & result 값 정의하기
// 3. button 이벤트 연산 작업하기
// 3-1. height & weight 값 활용 => 연산 => 변수명 => 할당!!
// 3-2. 함수 & 조건문 연산작업
// 4. result에 출력하기

const calculate = (weight, height) => {
  return weight / (height * height).toFixed(1);
};

const form = document.querySelector("form");
const result = document.querySelector(".result");
//=> 1번, 2번

const display = () => {
  let gruop;
  if (bmi >= 30.0) {
    gruop = "중등도 비만";
  } else if (bmi >= 25.0) {
    gruop = "경도 비만";
  } else if (bmi >= 18.5) {
    gruop = "정상";
  } else {
    gruop = "저체중";
  }
  result.innerText = `${bmi} -> ${gruop} 입니다`;
};
const formHandler = (e) => {
  e.preventDefault();
  const heightinput = document.querySelector("height");
  const weightinput = document.querySelector("weight");

  if(weightinput.value !=="" && heightinput.value !=="")
  const height = heightinput.value / 100;
  const weight = weightinput.value;
  const bmi = calculate(weight, height);

  display(bmi);
  heightinput.value = "";
  weightinput.value = "";
};

form.onsubmit = formHandler;
