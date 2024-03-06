const button = document.querySelector("button");
const result = document.querySelector("#result");

//로또 규칙!!
//한번 추첨 시 : 6개의 숫자 (*반드시 중복x)
//각각의 6개 숫자 : 최대 45까지
//1~45까지의 구간 숫자, 랜덤 => 수학객체 random() * 45
//반복문!!! * 6
//절대로 중복되어선 x Set()
//result 출력!!!
//add()

// const lottoPlay = () => {
//   const Num = Math.random() * 100;
//   const Num2 = Math.floor(Num);
//   if (Num2 >= 1 || 45 >= Num2) {
//     result.innerText = `${Num2}`;
//   }
// };

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
  } else {
    result.innertText = `${[...myNumber]}`;
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay);
