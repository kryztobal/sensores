const actions = {
    LOGOUT: 'LOGOUT',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
    logout: () => ({ type: actions.LOGOUT }),
    login: (payload) => ({ type: actions.LOGIN_REQUEST, payload }),
    checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
  };
  
  export default actions;