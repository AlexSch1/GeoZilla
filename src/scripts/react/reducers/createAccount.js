const initialState = {
    openPop: false,
    step: 'change',

    phoneNum: '',
    mailNum: '',
    changeFalid: false,    

    nextStepTo: '',




    codeNum: '',
    code: 123456


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
                openPop: false
            }
        case 'SET_CREATE_VALUE':
            let name = action.payload.name;
            return {
                ...state,
                [name]: action.payload.value
            }
        case 'SET_CREATE_CONTINUE':
            return {
                ...state,
                step: 'continue',
                nextStepTo: action.payload
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