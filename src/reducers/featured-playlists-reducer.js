const INITIAL_STATE = {
    "message": "",
    "playlists": {
        "items": [],
    }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GOT_PLAYLISTS':
            return { ...state, playlists: action.payload.playlists }
        default:
            return state
    }
}