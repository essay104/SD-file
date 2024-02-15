// if(조건식이 참이어야) {
//실행문이 실햄됨!!
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if(userInput === null) {
//   alert("취소하셨습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`)
// }

// const score = Number(prompt("프로그램 점수 : "));

// //예외 조항 처리
// //중첩사용이 가능!! = 반복해서 사용할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   }  else (
//     alert("C 학점")
//     )
//   }

// 자료구죠 & 알고리즘

//조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지 홀수인지 확인한 이후 사용자에게 짝소 혹은 홀수입니다. 라는 메세지를 출력해주세요!

// const userNum = Number(prompt("숫자를 입력해주세요"));

// if(userNum != null) {
//   const resetnum = Number(userNum);
//   if (resetnum2 % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다");
//   }
// } else {
//   alert("취소하였습니다.");
// }

// if(userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다");
// } else {
//     alert("취소하셨습니다")
//   }

// 가장 좋은 변수명(식별자) = 명시적 & 직관적
// 1) 예약어 : 이미 JS & window 사용중인 고유명사
// ex) document, window
// 2) 변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _, 영문자 (의외는 다 불가)
// 3) 변수명 반드시 대.소문자 구분
// camel표기법
// sneak표기법
// 헝가리언 표기법

//사용자에게 1~12까지의 숫자 중 하나를 받으세요. 그리고 전달받은 숫자에 따라서 다음과 같은 알림 메세지가 출력되게 해주세요

//사용자가 입력한 숫자 : 9~11 => 독서의 계절 가을이네요!
//사용자가 입력한 숫자 : 6~8 => 여행하기 좋은 여름이네요!
//사용자가 입력한 숫자 : 3~5 => 햇살 가득한 봄이네요!
//사용자가 입력한 숫자 : 12~2 => 스키의 계절 겨울이네요!

// 사용자에게 id와 pw값을 받으세요! 그리고 해당 id와 pw값이 다음과 같다면, "반갑습니다! 어서오세요! 라는 알림 메세지를 출력해주세요!!"

//id : ezenit / pw 1234

//그런데 만약 id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!"라는 알림 메세지를 출력해주시고, 만약 id와 pw 둘 다 틀렸을 경우에는 "아이디를 확인해주시요!"라는 알림 메세지를 출력해주세요!

// const id = "ezenit";
// const pw = 1234;

// const userId = prompt("당신의 아이디는?");

// if (userId === Id) {
//   const userPw = Number(prompt("당신의 비밀번호는?"));
//   if (userPw === pw) {
//     alert(`${userId}님 반갑습니다!`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다!");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다.");
//   location.reload();
// }

// switch( 조건식 => 참) {
//   case 1 : 실행문
//   break;
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
//   case 4 : 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if(subject !== null) {
//   switch (subject) {
//     case "1";
//     alert("HTML 신청");
//     break;
//   }
//   switch (subject) {
//     case "2";
//     alert("CSS를 신청");
//     break;
//   }
//   switch (subject) {
//     case "3";
//     alert("JS를 신청");
//     break;
//   }
// } else {
//   alert("취소하셧습니다");
// }

//사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요!!
//쇼핑몰 후보 : 쿠팡 / G마켓 / 11ST / 마켓컬리
//그렇다면 사용자가 선택한 쇼핑몰이 후보군안에 존재한다면, 확인버튼 누른 후 프롬프트 창에 확인 버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요!!

// window 객체안에 lacation 객체는 어디론가 이동해주도록 해주는 객체 location객체 안에 href속성 => 경로를 지정해주는 속성 쿠팡을 사용자가 선택했다면 location.herf = www.coupang.com결과 값을 설정하면 쿠팡사이트로 이동할수있습니다.

