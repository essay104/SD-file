const initialState = {
  count: 0,
  id: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREASE":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }

  // if (action.type === "INCREAMENT") {
  //   return { ...state, count: state.count + action.payload.num };
  // }

  // return { ...state };
};

export default reducer;
