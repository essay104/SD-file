// 원기둥의 부피 = 밑 면적 * 높이
// 밑면적 = (파이*(지름 /2) 제곱)

// 생성자 함수 혹은 class를 활용해서 코드작성!!

// 1. 사용자로부터 지름, 높이 값과 트리거, 결과값출력을 할 수 있도록 DOC에서 가져오기

// const diameter = document.querySelector("#cyl-diameter");
// const hegith = document.querySelector("#cyl-hegith");
// const btn = document.querySelector(".calc");
// const result = document.querySelector("#result");

// console.log(btn);

// 2. 밑면적 구하는 공식을 class를 활용해서 객체화

// const calc = 3.14 * ((diameter / 2) * (diameter / 2));

// console.log(calc);

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const res = hegith * calc;
//   result.innerHTML = res;
// });

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radious = this.diameter / 2;
//     return (Math.PI * radious * radious * this.height).toFixed(2);
//   };
// }

// const Cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다`);

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
  }
  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

let diameter = document.querySelector("#cyl-diameter").;
let height = document.querySelector("#cyl-heigth").;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const diametervalue = diameter.value;
    const heightvalue = height.value;
    if (diameter === "" || height === "") {
      result.innertext = "지름값과 높이값을 입력하세요!";
    } else {
      const cylinder = new Cylinder(parseint(diameter), parseInt(height));
      result.innertext = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`;
      diameter = "";
      height = "";
    }
  }
);
