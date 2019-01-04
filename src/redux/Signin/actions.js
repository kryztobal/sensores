const actions = {
    LOGOUT: 'LOGOUT',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    AUTH_CHECK: 'AUTH_CHECK',
    logout: () => ({ type: actions.LOGOUT }),
    login: (payload) => ({ type: actions.LOGIN_REQUEST, payload }),
    authCheck: (payload) => ({ type: actions.AUTH_CHECK, payload })
  };
  
  export default actions;