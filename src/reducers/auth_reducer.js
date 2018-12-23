const initState = {
    accessToken: null,
    profile: null
}

export default ( state = initState, action ) => {
    switch (action.type) {
      case "LOGOUT":
        return initState
      case "LOGIN_SUCCESS":
        return {
          ...state,
          token: action.token
//          profile: action.profile
        }
      default:
        return state
    }
}