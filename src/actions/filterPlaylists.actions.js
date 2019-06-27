import { getPlaylists } from './featuredPlaylists.actions';

export const filterValueChanged = event => {
    return (dispatch) => {
        dispatch({type: 'FILTER_VALUE_CHANGED', payload: event.target});
        dispatch(getPlaylists());
    }
}
