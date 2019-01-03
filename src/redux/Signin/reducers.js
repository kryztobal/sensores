import actions from './actions';

const initState = {
  token: null,
  user:null
}

export default ( state = initState, action ) => {
  console.log("action", action)
  switch (action.type) {
    case actions.LOGOUT:
      return initState
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user
      }
    default:
      return state
  }
}