// const str = "hello";
// const greeting = "안녕하세요";
// const str01 = "good Morning!";

// console.log(str.length);
// console.log(str.length);
// console.log(str01.charAt(0));

// const string = prompt("문자열을 입력하세요");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);

// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다`);

const str1 = "Good morning, everyone. Beautiful morning.";

console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));

const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 1));

console.log("==== endwiht ====");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("lo, everyone"));

// -endsWith() : startWith() 문법과 동일하게 작동

console.log("==== include ====");
console.log(str2.includes("every"));
console.log(str2.includes("one"));

console.log("==== trim methods");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);

// console.log( (""==== Uppercase / Lowercase ====""));
let str4 = "Good moarning";
// console.log(str4.toUpperCase());

console.log(" ==== substring ====");
console.log(str4.substring(5, 8));
console.log(str4.substring(5));

// console.log("====slice====");
// consolelog.log(str4.slice(0.4));
// consolelog.log(str4.slice(0));

console.log("====split===");
const str5 = "Hello eveeryone";

const array1 = str5.split(" ");
const array2 = str5.split(" ");
console.log(array1);
