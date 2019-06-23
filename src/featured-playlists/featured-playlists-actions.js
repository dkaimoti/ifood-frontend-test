export const getPlaylists = () => {
    return (dispatch, getState) => {
        const state = getState();
        const access_token = state.user.data.access_token;
        const filterParameters = state.filtersValues
        const headers = {
            'Authorization': `Bearer ${access_token}`,
            "Content-Type": "application/json"
        }
        const URL = `${process.env.REACT_APP_SPOTIFY_FEATURED_PLAYLISTS}`+
            `?country=${encodeURIComponent(filterParameters.country)}`+
            `&locale=${encodeURIComponent(filterParameters.locale)}`+
            `&timestamp=${encodeURIComponent(filterParameters.timestamp)}`+
            `&limit=${encodeURIComponent(filterParameters.limit)}`+
            `&offset=${encodeURIComponent(filterParameters.offset)}`;
    
        fetch(URL, { method: "GET", headers: headers })
            .then(response => response.json())
            .then(response => dispatch({ 
                type: 'GOT_PLAYLISTS',
                payload: response
            }))
    }

}
