const initialState = {
  openPop: false,
  step: 1

}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SUBSCR':
      return {
        ...state,
        openPop: action.payload,
        step: 1
      }
    case 'SUBSCR_STEP':
      return {
        ...state,
        step: 2
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
        step: 3
      }
    case 'SUBSCR_AGAIN':
      return {
        ...state,
        step: 4
      }
    case 'SUBSCR_CLOSE':
      return {
        ...state,
        step: 1,
        openPop: false
      }
    default:
      return state
  }
}
