const initialState = {
    openPop: false,
    login: false,
    loginName: {
        value: '',
        valid: true
    },
    loginPass: {
        value: '',
        valid: true
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LIG_IN':
            return {
                ...state,
                openPop: action.payload
            }
        case 'SET_VALUE':
            let name = action.payload.name;
            return {
                ...state,
                [name]: { ...state[name], value: action.payload.value }
            }
        case 'SET_LOGIN':
            return {
                ...state,
                login: true
            }
        case 'SET_VALID':
            let namei = action.payload.name;
            return {
                ...state,
                [namei]: { ...state[namei], valid: action.payload.valid }
            }
        case 'LOG_CLOSE':
            return {
                ...state,
                openPop: false
            }
        default:
            return state
    }
}
