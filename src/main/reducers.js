import { combineReducers } from 'redux';

import filterPlaylistReducer from '../filter-playlists/filter-playlists-reducer';
import featuredPlaylistsReducer from '../featured-playlists/featured-playlists-reducer';
import userReducer from '../login/login-reducer';
import filterFiedlsReducer from '../filter-playlists/filter-fields-reducer';

const rootReducer = combineReducers({
    user: userReducer,
    filtersFields: filterFiedlsReducer,
    filtersValues: filterPlaylistReducer,
    lists: featuredPlaylistsReducer
})

export default rootReducer;