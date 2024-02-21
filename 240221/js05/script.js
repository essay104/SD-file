// 1.버튼과 단락을 불러와서 선언한다.
// 2.if구문을 사용해서 버튼을 누르면 가상클래스가 활성화 되게 한다
// 3.elso를 사용해서 반대로 작용하게 한다.

// const btn = document.querySelector("#view");
// // console.log("#view");
// const p = document.querySelector("p");
// // console.log(p);

// btn.onclick = () => {
//   if()
// };

const viewBtn = document.querySelector("#view");
const deetail = document.querySelector("#detail");
// console.log(#viewBtn);
// console.log(#detail);

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
