import actions from './actions';

const initState = {
    error:""
}

export default ( state = initState, action ) => {
  switch (action.type) {
    case actions.SIGNUP_ERROR:
      return { ...state, error: action.error}
    default:
      return state
  }
}