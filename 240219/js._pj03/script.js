// 사용자로부터 숫자 하나를 받으시고, 해당 숫자가 양수인지, 음수인지, 0인지 판단해서 알림창을 활용해서 이에 대한 결과를 출력해주세요!!!

const number = parseInt(prompt("숫자를 입력하세요!"));
const isPositive = (n) => {
  if (n > 0) {
    alert(`$(n)은 양수입니다.`);
    alert(`%는 음수입니다.`);
    alert(`$는 0입니다!`);
  }
};

// console.log(isNaN(7));
if (!isNaN(number)) {
  isPositive(number);
}
