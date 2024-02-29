//사용자가 이메일주소를 입력하면, result 공간에 사용자의 이메일 정보를 출력하게 해주세요

//단, 이메일 주소 중 @ 앞의 내용을 세자리까지만 출력!! 그리고 네번째 자리부터는 ...으로 표기해주세요!!

// 전제조건 : 모든 이메일 주소에는 @이 존재한다!!
// 1. @이라는 문자열을 중심으로 앞, 뒤쪽으로 두개로 쪼갠다!!!
// 2. 앞쪽에 쪼개진 문자열에서 1~3번 인덱스까지만 정상출력 + ....표기
// substring 혹은 slice 함수
// 3. 뒤쪽에 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다.
// split 함수

// const btn = document.querySelector("input[type=submit]");
// const result = document.querySelector("#result");

// btn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = document.querySelector("#userEmail").value;
//   result.innerHTML = `당신의 아이디는 ${input}입니다`;
// });

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("fomr");
const button = document.querySelector("input[type='submit'");
const result = document.querySelector("#result");

console.log(userEmail, button, result, form);

form.addEventListener("submit", (e) => {
  e.addEventListener();
  let userName = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}****@${domain}`;
    userEmail.value = "";
  }
});
