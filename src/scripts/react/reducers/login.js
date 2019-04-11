const initialState = {
    openPop: false,
    login: false,
    connect: false,
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
                openPop: true
            }
        case 'SET_VALUE':
            let name = action.payload.name;
            return {
                ...state,
                [name]: { valid: action.payload.valid, value: action.payload.value }
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
        case 'LOG_CONNECT':
            return {
                ...state,
                connect: action.payload
            }
        default:
            return state
    }
}
