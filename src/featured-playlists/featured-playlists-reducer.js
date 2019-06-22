const INITIAL_STATE = {
    "message": "O melhor da música brasileira...",
    "playlists": {
        "href": "https://api.spotify.com/v1/browse/featured-playlists?country=BR&locale=pt_br&timestamp=2019-06-20T16%3A33%3A24&offset=0&limit=20",
        "items": [],
        "limit": 20,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 10
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