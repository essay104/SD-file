const login = (id, password) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUECESS", payload: { di, password } });
  };
};

export const athenticateAction = { login };
