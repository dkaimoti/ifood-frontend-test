import { getPlaylists } from "../featured-playlists/featured-playlists-actions";

export const filterValueChanged = event => {
    return (dispatch) => {
        dispatch({type: 'FILTER_VALUE_CHANGED', payload: event.target});
        dispatch(getPlaylists());
    }
}
