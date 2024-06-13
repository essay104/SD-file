import React from "react";
import { useReducer, useRef, useCallback, useMemos } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// context

export const TodoStateContext = React.createContext();
export const TodoDispacthContext = React.createContext();

// state function
const reducer = (state, action) = {
  
}

// mockup
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "헬스장 가서 런닝머신",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "코인노래방 노래연습",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(
      todo.filter((it) => {
        it.id !== targetId.Id;
      })
    );
  };

  const momoizedDispathes = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  }, [];)

  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={{todo}}>
      <TodoDispacthContext Provider value={(onCreate, onUpdate, onDelete)}>
      <TodoEditor/>
      <TodoList/>
      </TodoDispacthContext>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
