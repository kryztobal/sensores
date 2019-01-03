import actions from './actions';

const initState = {
  deviceList: [],
  // deviceInfoList:[]
}

export default ( state = initState, action ) => {

  switch (action.type) {
    case actions.GET_DEVICE_LIST_SUCCESS:
      return { ...state, deviceList: action.payload.Items }
    // case actions.GET_DEVICE_INFO_SUCCESS:
    //   return { ...state, deviceInfoList : action.payload.Items }
    default:
      return state
  }
}