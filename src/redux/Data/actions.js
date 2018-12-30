const actions = {
    GET_DEVICE_LIST: 'GET_DEVICE_LIST',
    GET_DEVICE_INFO: 'GET_DEVICE_INFO',
    GET_DEVICE_LIST_SUCCESS: 'GET_DEVICE_LIST_SUCCESS',
    GET_DEVICE_INFO_SUCCESS: 'GET_DEVICE_INFO_SUCCESS',
    GET_DEVICE_LIST_ERROR: 'GET_DEVICE_LIST_ERROR',
    GET_DEVICE_INFO_ERROR: 'GET_DEVICE_INFO_ERROR',
    getDeviceList: () => ({ type: actions.GET_DEVICE_LIST }),
    getDeviceInfo: (payload) => ({ type: actions.GET_DEVICE_INFO, payload })
};
  
export default actions;