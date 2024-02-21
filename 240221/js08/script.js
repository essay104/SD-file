// input[type="text"] 태그를 가져와서 a를 선언한다.
// input[type="submit"] 태그를 가져와서 b를 선언한다.
// 내가 컴퓨터의 입장이라면?
// 값을 줘 -> 값을 input text에 입력한다
// 그럼 값을 어떻게 할건데 -> 버튼을 눌러서 명령을 실행
// 무슨 명령을 내릴건데 -> li태그의 스타일을 적용해서 ul태그 안에 출력

// 1. 사용자가 입력하는 값을 찾아오기 위해 입력창 정의
// 2. 사용자가 클릭할 버튼에 대한 정의
// 3. 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// 3.5 li 태그를 DOM 생성!! => 입력창을 통해서 전달받은 값을 li태그 삽입 => ul 태그 자식 요소
// 4. 사용자가 입력한 값을 출력할 공간에 대한 정의

//창조변수 e, (e)preventDefault => 로 등록버튼 클릭시 localhost로 이동하는것을 무력화

//value는 전역변수에 넣으면 안됨, 이벤트 직후에 작성
//createElement => 태그 창조

const form = document.querySelector("form"); //=> 1번
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul"); //=> 5번

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
};

form.onsubmit = formFnc;
