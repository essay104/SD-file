//수학객체
// Math

let num = 2.5234;
let maxNum = Math.max(10, 5, 8, 30);
console.log(maxNum); // 매개변수 중 가장 큰 수

let minNum = Math.min(10, 5, 8, 30);
console.log(minNum); // 매개변수 중 가장 작은 수

let roundNum = Math.round(num);
console.log(roundNum); // 2.524 = 3 //반올림

let floorNum = Math.floor(num);
console.log(floorNum); //2.524 = 2 //소숫점 버리기

let ceilNum = Math.ceil(num);
console.log(ceilNum); //2.524 = 3 // 올림

let rndNum = Math.random();
console.log(rndNum); // 1보다 작은 0의 실수의 소숫점 부분을 난수로 표현 // 쇼핑몰, 바코드, 추첨 등

let piNum = Math.PI;
console.log(piNum); // 원주율 3.14
