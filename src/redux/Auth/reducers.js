import actions from './actions';

const initState = {
  accessToken: null
}

export default ( state = initState, action ) => {
  switch (action.type) {
    case actions.LOGOUT:
      return initState
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken
      }
    default:
      return state
  }
}