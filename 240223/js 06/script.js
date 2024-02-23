// 1. 제목 & 저자 값을 찾아와야 한다. (HOW? Why?)
// 1-1. How -> input > .value

// 2. 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// form => submit

//2. 찾아온 값을 출력해주도록 도와주는 이벤트 함수가 필요하다
// -> addEventListener

// 3. 출력할 공간에 대해 정의해야 한다. (How?)
// how -> querySelector

// 4. 삭제하기 버튼을 정의한다. (How?)
// -> createElement, appendChild

// 5. 삭제하기 버튼이 복수의 갯수로 생성 => 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위해서 => this (*클래스 함수 vs 화살표 함수)

// 6. 삭제하기 버튼 클릭 시, 목록삭제 이벤트 함수 (How?)
// -> parentNode, removeChild

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";
  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});
