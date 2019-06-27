import { combineReducers } from 'redux';

import filterPlaylistReducer from './filterPlaylists.reducer';
import featuredPlaylistsReducer from './featuredPlaylists.reducer';
import filterFiedlsReducer from './filterFields.reducer';

const rootReducer = combineReducers({
    filtersFields: filterFiedlsReducer,
    filtersValues: filterPlaylistReducer,
    lists: featuredPlaylistsReducer
})

export default rootReducer;