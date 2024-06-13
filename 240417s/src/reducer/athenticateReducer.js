const initialState = {
  id: "",
  password: "",
  authenticate: false,
};

const athenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default athenticateReducer;
