const buttons = document.querySelectorAll("button");
const result = ["가위", "바위", "보"];

const play = (any) => {
  const users = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[random - index];
  Gamepad(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});

const game = (user, computer) => {
  if (user === computer) {
    console.log("무승부");
  } else {
    switch {user + computer} {
      console.log("사용자 승리!") {
        case "가위보"
      }
    }
  }
};
