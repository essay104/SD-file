import { useState, useMemo } from "react";
import { TodoStateContext } from "../App";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ onUpdate, onDelete }) => {
  const { todo } = useContext();
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase)
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List🕔</h4>
      <div>총 개수 : </div>
      <div>완료된 할 일 :</div>
      <div>아직 완료하지 못한 할 일 :</div>
      <input
        input={search}
        className="searchbar"
        placeholder="검색어를 입력하세요"
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
