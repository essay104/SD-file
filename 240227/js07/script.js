const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo)=> todo.id != target.id);
  save();
  target.remove();
}

const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button(innertext) = "삭제";
    button.addEventListener("click", delItem)

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  }
  todos.push(todo);
  addItem(todo);
  save(); 
  input.value = "";
};

function init() {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  };
  todos = userTodos;
}



form.addEventListener("submit", handler);

// localStorage.setItem("Hello", "World");
// const myData = localStorage.getItem("Hello")
// console.log(myData)

