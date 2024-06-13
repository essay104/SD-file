import { type } from "@testing-library/user-event/dist/type";
import "./App.css";
import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onchangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onchangeBirth = (e) => {
  //   setBirth(e.target.value);
  // };

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container">
        <div>
          <input
            name="name"
            value={name}
            placeholder="이름"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <select name="gender" onChange={handleOnChange}>
            <option key=""></option>
            <option value={여성} key="여성">
              여성
            </option>
            <option value={남성} key="남성">
              남성
            </option>
          </select>
        </div>
        <div>
          <input
            name="birth"
            value={birth}
            type="date"
            onChange={handleOnChange}
          ></input>
        </div>
        <div>
          <textarea onChange={handleOnChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
