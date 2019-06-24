export const getPlaylists = () => {
    return (dispatch, getState) => {
        const user = JSON.parse(localStorage.getItem('spotifood-user'));
        const access_token = user ? user.access_token : '';
        const state = getState();
        const filterParameters = state.filtersValues
        const headers = {
            'Authorization': `Bearer ${access_token}`,
            "Content-Type": "application/json"
        }
        const URL = `${process.env.REACT_APP_SPOTIFY_FEATURED_PLAYLISTS}` +
            `?country=${encodeURIComponent(filterParameters.country)}` +
            `&locale=${encodeURIComponent(filterParameters.locale)}` +
            `&timestamp=${encodeURIComponent(filterParameters.timestamp)}` +
            `&limit=${encodeURIComponent(filterParameters.limit)}` +
            `&offset=${encodeURIComponent(filterParameters.offset)}`;

        fetch(URL, { method: "GET", headers: headers })
            .then(response => {
                if (response.status === 401) {
                    window.location.assign(process.env.REACT_APP_SPOTIFY_AUTH_SERVER);
                    return;
                } else {
                    return response.json()
                }
            })
            .then(response => dispatch({
                type: 'GOT_PLAYLISTS',
                payload: response
            }))

    }

}
