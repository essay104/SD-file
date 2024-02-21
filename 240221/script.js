// 변수 -> 자료형
// 숫자형, 문자열, 논리형, 심볼, 객체, 배열, 함수, BigInt

// 원시타입 자료형 = Primitive type
// 숫자형, 문자열, 논리형, BigInt

// 참조타입 자료형 = reference type
// 심볼, 객체, 배열, 함수

// 원시타입 => 변수생성 공간/데이터생성 공간
// 변수 생성 공간 => 데이터 생성 공간 참조
let number1 = 100;
let number2 = number1;
number2 = 200;

console.log(number1);
console.log(number2);

//참조타입 => 변수생성 공간/데이터생성 공간/객체 내 변수값 공간
// 변수 생성 공간 => 데이터 생성 공간 참조 => 객체 내 변수값 공간 참조
let bag1 = {
  color: "blue",
  width: "30",
  height: "50",
};

let bag2 = bag1;
bag2.color = "red";

console.log(bag1);
console.log(bag2);
