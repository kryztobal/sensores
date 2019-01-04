import actions from './actions';

const initState = {
  token: null,
  user:null,
  error:""
}

export default ( state = initState, action ) => {
  switch (action.type) {
    case actions.LOGOUT:
      return initState
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user
      }
      case actions.LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}