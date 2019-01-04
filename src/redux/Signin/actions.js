const actions = {
    LOGOUT: 'LOGOUT',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    logout: () => ({ type: actions.LOGOUT }),
    login: (payload) => ({ type: actions.LOGIN_REQUEST, payload })
  };
  
  export default actions;