import React from 'react';
import { shallow } from 'enzyme';
import Playlists from './';

const playlistMock = [
    {
        "collaborative": false,
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTkIwO2HDifB"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkIwO2HDifB",
        "id": "37i9dQZF1DWTkIwO2HDifB",
        "images": [{
            "height": null,
            "url": "https://pl.scdn.co/images/pl/default/7124ed3414ac8c406bf736dd8db2c223e713db93",
            "width": null
        }],
        "name": "Funk Hits",
        "owner": {
            "display_name": "Spotify",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/spotify"
            },
            "href": "https://api.spotify.com/v1/users/spotify",
            "id": "spotify",
            "type": "user",
            "uri": "spotify:user:spotify"
        },
        "primary_color": null,
        "public": null,
        "snapshot_id": "MTU2MTM4NzA0NiwwMDAwMDBmNzAwMDAwMTZiODllYjk3NGQwMDAwMDE2YjcwYWM0ZjMx",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkIwO2HDifB/tracks",
            "total": 29
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DWTkIwO2HDifB"
    }
]

describe('Playlists Component', () => {

    it('should render with defaults', () => {
        const wrapper = shallow(<Playlists playlist={playlistMock} />);
        expect(wrapper.find('.playlists')).toBeTruthy();
    });

});