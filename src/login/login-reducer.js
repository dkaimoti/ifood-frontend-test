const INITIAL_STATE = {
    data: {
        access_token: '',
        token_type: 'Bearer',
        expires_in: 3600,
        state: ''
    }
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_AUTHENTICATED':
            return { ...state, data: action.payload }
        default:
            return state
    }
}