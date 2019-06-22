
const INITIAL_STATE = {
    "filters": []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GOT_FIELDS':
            return { ...state, filters: action.payload.filters }
        default:
            return state
    }
}