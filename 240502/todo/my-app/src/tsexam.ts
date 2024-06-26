// // // 함수타입 & 제네릭타입
// // // 함수는 어떤 값(의 타입)을 받아서 어떤 값(의 타입)을 반환

// import { profile } from "console";

// // const func = (a: number, b: number): number => {
// //   return a + b;
// // };

// // // 1) 함수에 기본 매개변수를 설정할 때
// // const introduce = (name = "David") => {
// //   console.log(`name: ${name}`);
// // };

// // // 2) 함수에 선택적 매개변수를 설정할 때
// // const introduce01 = (name = "Jane", age: number, tall?: number) => {
// //   console.log(`name: ${name}`);
// //   console.log(`tall: ${tall}`);
// //   // 타입 가드 = 타입 좁혀나간다는 의미!!
// //   if (typeof tall === "number") {
// //     console.log(`tall: ${tall + 10}`);
// //   }
// // };

// // // 3) 함수에 전개연산자 형식의 매개변수 => rest 매개변수를 설정할 때
// // const getSum = (...rest: number[]): number => {
// //   let sum = 0;
// //   rest.forEach((it) => (sum += it));
// //   return sum;
// // };

// // getSum(1, 2, 3);

// // // 4) 함수 타입표현식 => 함수 타입별칭
// // // - interface extends || type 대수타입 유니온 / 인터섹션
// // // - interface : 동일한 인터페이스명 사용가능 || type 동일한 타입명 사용불가능

// // type Add = (a: number, b: number) => number;
// // const add: Add = (a, b) => a + b;
// // const sub: Add = (a, b) => a - b;
// // const multiply: Add = (a, b) => a * b;
// // const divide: Add = (a, b) => a / b;

// // // 5) 함수 타입표현식 => 호출 시그니처 형식
// // type Operation = {
// //   (a: number, b: number): number;
// //   name: string;
// // };

// // const add2: Operation = (a, b) => a + b;
// // add2.name;

// // // 6) 함수 타입호환성 > 반환값 기준
// // // 특정 함수의 타입을 다른 함수의 타입으로 포함시킬 수 있는가를 따져보는 개념

// // type A = () => number; //슈퍼타입
// // type B = () => 10; //서브타입

// // // 서브타입 아이템을 슈퍼타입의 아이템에 할당하는 행위 : upcasting
// // // 슈퍼타입 아이템을 서브타입의 아이템에 할당하는 행위 : downcasting

// // let a: A = () => 10;
// // let b: B = () => 10;

// // a = b;
// // // b = a;

// // // 7) 함수 타입호환성 > 매개변수 기준 (매개변수의 개수 같은 경우!!)

// // type C = (value: number) => void;
// // type D = (value: 10) => void;

// // let c: C = (value) => {};
// // let d: D = (value) => {};

// // // c = d;
// // d = c;

// // type Animal = {
// //   name: string;
// // };

// // type Dog = {
// //   name: string;
// //   color: string;
// // };

// // let animalFunc = (animal: Animal) => {
// //   console.log(animal.name);
// // };

// // let dogFunc = (dog: Dog) => {
// //   console.log(dog.name);
// //   console.log(dog.color);
// // };

// // // animalFunc = dogFunc;
// // dogFunc = animalFunc;

// // // 8) 함수 타입호환성 > 매개변수 기준 (매개변수의 개수 다른 경우!!)

// // type Func1 = (a: number, b: number) => void;
// // type Func2 = (a: number) => void;

// // let func1: Func1 = (a, b) => {};
// // let func2: Func2 = (a) => {};

// // func1 = func2;
// // // func2 = func1;

// // // 9) 함수 오버로딩
// // // *익명함수x = 화살표함수x
// // // funcion

// // // 함수 오버로드
// // function func01(a: number): void;
// // function func01(a: number, b: number, c: number): void;

// // // 함수 구현
// // function func01(a: number, b?: number, c?: number) {
// //   if (typeof b === "number" && typeof c === "number") {
// //     console.log(a + b + c);
// //   } else {
// //     console.log(a * 20);
// //   }
// // }

// // // 함수 호출
// // func01(1);
// // // func01(1, 2);
// // func01(1, 2, 3);

// // // 10) 함수 구현 타입정의 => 커스터마이징 => 사용자 정의 타입가드

// // type Dog01 = {
// //   name: string;
// //   isBark: boolean;
// // };

// // type Cat01 = {
// //   name: string;
// //   isScratch: boolean;
// // };

// // type Animal01 = Dog01 | Cat01;

// // const warning = (animal: Animal01) => {
// //   if ("isBark" in animal) {
// //     console.log(animal.isBark);
// //   } else if ("isScratch" in animal) {
// //     console.log(animal.isScratch);
// //   }
// // };

// // // type Dog02 = {
// // //   name: string;
// // //   isBark: boolean;
// // // };

// // const isDog = (animal: Animal01) => {
// //   return (animal as Dog01).isBark;
// // };

// // // 제네릭 타입 개념복습
// // // Generic => General (*종합적인) : General Hospital = 종합병원
// // // 제네릭 타입을 사용하는 이유 : 현재 시점에서는 어떤 타입의 변수 및 state가 들어올지 모르고 있는 상태에서 우선, 타입을 정의해야하는 경우!!!

// // // 반론제기!! => 어떤 값이 들어올지 미정, 타입 cheat key : any

// // const func02 = (value: unknown) => {
// //   return value;
// // };

// // let num = func02(10);
// // let str = func02("string");

// // // num.toUpperCase();
// // if (typeof num === "number") {
// //   num.toFixed();
// // }

// // // 반론제기!! => 어떤 값이 들어올지 미정, 타입 cheat key : any

// // const func03 = <T>(value: T): T => {
// //   return value;
// // };

// // let num03 = func03(10);

// // const func04 = <T>(value: T): T => {
// //   return value;
// // };

// // // 함수안에 직접적으로 타입을 명시하는 경우!!
// // let arr = func04<[number, number, number]>([1, 2, 3]);

// // // 제네릭 타입 응용_1!!!
// // const swap = <T, U>(a: T, b: U) => {
// //   return [b, a];
// // };

// // const [a01, b01] = swap("1", 2);

// // // 반론제기!!! 타입변수 선언!!! => 변수 타입이 꼭 하나라는 법?!

// // // 제네릭 타입 응용_2!!!
// // const returnFirstValue = <T>(data: T[]) => {
// //   return data[0];
// // };

// // const num05 = returnFirstValue([0, 1, 2]);

// // const str05 = returnFirstValue([1, "Hello", "World"]);

// // // 제네릭 타입 응용_3!!!

// // const returnFirstValue01 = <T>(data: [T, ...unknown[]]) => {
// //   return data[0];
// // };

// // // 제네릭 타입 응용_4!!!

// // const getLength = <T extends { length: number }>(data: T) => {
// //   data.length;
// // };

// // getLength("123");
// // getLength([1, 2, 3]);
// // getLength({
// //   length: 2,
// // });

// // // getLength(null);
// // // getLength(undefined);

// // 제네릭 타입 응용 : React.js => JSX 문법을 활용한 반복실행.처리 => map
// // 타입정의 허들!!!
// // 기존 배열을 가져와서 어떤 연산작업 후 새로운 배열을 생성!!!
// // a = [1, 2, 3, 4] => b = ["1", "2", "3"]

// // const arr: number[] = [1, 2, 3];
// // const newArr = arr.map((it) => it * 2);
// // [2, 4, 6]

// // 기본적인 map 매서드 타입을 unknown으로 정의했을 때
// // const map = (
// //   arr: unknown[],
// //   callback: (item: unknown) => unknown
// // ): unknown[] => {
// //   return [];
// // };

// // map 매서드 타입을 타입변수를 활용한 제네릭 형식으로 정의했을 때
// const arr = [1, 2, 3];
// const map = <T, U>(arr: T[], callback: (item: T) => U): U[] => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// };

// // map(arr, (it) => it * 2);
// map(arr, (it) => it.toString());

// // forEach 매서드 타입 정의

// const arr2 = [1, 2, 3];
// arr2.forEach((it) => console.log(it));

// const forEach = <T>(arr: T[], callback: (item: T) => void) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };

// // 제네릭 응용 : 인터페이스

// interface KeyPair<K, T> {
//   key: K;
//   value: T;
// }

// let keyPair: KeyPair<string, number> = {
//   key: "Key",
//   value: 0,
// };

// let keyPair2: KeyPair<boolean, string[]> = {
//   key: true,
//   value: ["1"],
// };

// interface Map<V> {
//   [key: string]: V;
// }

// let stringMap: Map<string> = {
//   key: "value",
// };

// let booleanMap: Map<boolean> = {
//   key: true,
// };

// type Map2<V> = {
//   [key: string]: V;
// };

// let stringMap2: Map2<string> = {
//   key: "string",
// };

// //* 제네릭 인터페이스를 활용한 또다른 예제

// interface Student {
//   type: "student";
//   school: string;
// }

// interface Developer {
//   type: "developer";
//   skill: string;
// }

// // type A = B | C

// interface User<T> {
//   name: string;
//   profile: T;
// }

// const goToSchool = (user: User<Student>) => {
//   if (user.profile.type !== "student") {
//     console.log("잘 못 오셨습니다.");
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// };

// const developerUser: User<Developer> = {
//   name: "David",
//   profile: {
//     type: "developer",
//     skill: "TS",
//   },
// };

// const studentUser: User<Student> = {
//   name: "Jane",
//   profile: {
//     type: "student",
//     school: "Seoul",
//   },
// };

// // 제네릭 응용 => 제네릭 클래스

// class List<T> {
//   constructor(public list: T[]) {}

//   push(data: T) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// // class StringList {
// //   constructor(public list: string[]) {}

// //   push(data: string) {
// //     this.list.push(data);
// //   }

// //   pop() {
// //     return this.list.pop();
// //   }

// //   print() {
// //     console.log(this.list);
// //   }
// // }

// const numberList = new List([1, 2, 3]);
// const stringList = new List(["1", "2", "3"]);
