const actions = {
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    SIGNUP_REQUEST: 'SIGNUP_REQUEST',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    signup: (payload) => ({type: actions.SIGNUP_REQUEST, payload})
}
  
export default  actions