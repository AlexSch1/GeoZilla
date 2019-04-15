const initialState = {
    openPop: false,
    step: 'change',

    valueChangeStep: {
        value: ''
    },

    valueStepCreate: {
        emailOrNum: '',
        pass: '',
        name: ''
    },

    cbCode: '123456',

    nextStepTo: ''


}



export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ACC_OPEN':
            return {
                ...state,
                openPop: action.payload,
                step: 'change'
            }
        case 'SET_CREATE_CLOSE':
            return {
                ...state,
                step: 'change',
                openPop: false
            }
        case 'SET_CREATE_VALUE':
            let name = action.payload.name;
            return {
                ...state,
                valueChangeStep: {value: action.payload.value }
            }
        case 'SET_CREATE_CONTINUE':
            return {
                ...state,
                valueStepCreate: {...action.payload}
            }
        case 'SET_CREATE_STEP':
            return {
                ...state,
                step: action.payload.step
            }
        default:
            return state
    }
}