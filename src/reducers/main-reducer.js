import { combineReducers } from 'redux';

import filterPlaylistReducer from './filter-playlists-reducer';
import featuredPlaylistsReducer from './featured-playlists-reducer';
import filterFiedlsReducer from './filter-fields-reducer';

const rootReducer = combineReducers({
    filtersFields: filterFiedlsReducer,
    filtersValues: filterPlaylistReducer,
    lists: featuredPlaylistsReducer
})

export default rootReducer;