// //최대공약수 구하기

// //1. 첫번째 input을 불러오고 선언한다 = a
// //2. 두번째 input을 불러오고 선언한다 = b
// //3. 버튼과 출력표시창을 가져오고 선언한다
// //3. a를 b로 나눴을때 0이된다면 그 중 가장 높은 값을 출력한다

// const a = document.querySelector("#number1");
// // console.log("#number1");
// const b = document.querySelector("#number2");
// const btn = document.querySelector("#calc");
// const result = document.querySelector("#result");

// btn.onclick = () => {
//   if {a/b = 0}
// };

// 1. 두개의 사용자가 입력한 숫자를 찾아온다
// 2. 출력될 공간을 정의한다
// 3. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다.
// 4. 값을 출력시켜주기 위한 연산 작업이 필요하다.
// 5. 최대공약수에 대한 개념이 필요하다.

const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const button = document.querySelector("form input[type='submint]");
const result = document.querySelector("resulte");

const getGCD = (firstNum, seciondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i < max; i++) {
    if (firstNum % 1 === 0 && secondNum % i === 0) {
      GCD = 1;
    }
  }
  return GCD;
};

button.onclick = function (e) {
  e.preventdefalut();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
