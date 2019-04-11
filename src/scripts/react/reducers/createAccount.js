const initialState = {
    openPop: false,
    step: 'change',
    phoneNum: '',
    mailNum: '',
    codeNum: '',
    code: 123456


}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_ACC_OPEN':
            return {
                ...state,
                openPop: action.payload
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
                step: 'continue'
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