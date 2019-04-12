export const subscription = (action) => ({
  type: 'SUBSCR',
  payload: action
})

export const subscription_connect = () => ({
  type: 'SUBSCR_CONNECT'
})

export const subscription_setvalue = (action) => ({
  type: 'SUBSCR_SET_VALUE',
  payload: action
})

export const subscription_step_home = (action) => ({
  type: 'SUBSCR_HOME',
  payload: action
})

export const subscription_step_again = (action) => ({
  type: 'SUBSCR_AGAIN',
  payload: action
})


export const subscription_step_close = () => ({
  type: 'SUBSCR_CLOSE'
})