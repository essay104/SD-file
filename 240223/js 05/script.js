// const tsNode = document.createElement("p");
// const tsTextNode = document.createAttribute.Node{"tyeescratipt"}
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];

// document.body.insertBefore(tsNode, basisNOde);

// const items = document.querySelectorAll("li");
// for (let item of items) {
//   item.addEventListener("click", function () {
//     this.parentNode.removeChild(this);
//   });
// }

//this객체
//단, 조건!!! => 현재 선택한 li태그를 this객체로 대체해서 사용할 수 있음, 단, 클래스 함수를 사용할 때에만, 화살표 함수를 사용할 때에는 this객체가 이벤트를 실행시키는 당사자 = 주체가 되는것이 아니라 window 객체가 this가 됩니다.

//1. 입력 (p 태그들)
//2. 공정 (p태그 안의 span태그 클릭 이벤트)
//3. 결과 (span태그 삭제)

// const goods = document.querySelectorAll("p");
// console.log(goods);
// for (let item of goods) {
//   item.addEventListener("click", () => {
//     item.parentNode.removeChild(item);
//   });
// }

const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
