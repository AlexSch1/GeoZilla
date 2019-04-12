const initialState = {
  openPop: false,
  step: 'step_main'

}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBSCR':
      return {
        ...state,
        openPop: action.payload,
        step: 'step_main'
      }
    case 'SUBSCR_CONNECT':
      return {
        ...state,
        step: 'step_connect'
      }
    case 'SUBSCR_SET_VALUE':
      let name = action.payload.name;
      return {
        ...state,
        [name]: { ...state[name], value: action.payload.value }
      }
    case 'SUBSCR_HOME':
      return {
        ...state,
        step: 'step_go_home'
      }
    case 'SUBSCR_AGAIN':
      return {
        ...state,
        step: 'step_again'
      }
    case 'SUBSCR_CLOSE':
      return {
        ...state,
        step: 'step_main',
        openPop: false
      }
    default:
      return state
  }
}
