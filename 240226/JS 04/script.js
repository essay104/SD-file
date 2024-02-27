// 사용자로부터 "오늘부터 며칠간 만보걷기"를 했는지 물어보고 임의 날짜를 받으세요!!

// 00일 연속 달성 출력 될 수 있게 해주세요!!

const userQuery = prompt(
  "만보 걷기를 시작한 날짜를 입력해주세요!",
  "ex.2024-01-09"
);
const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;

console.log(today);
