import type { IArtist, ITrack } from "./music.types";
import type { IPlaylist } from "./playlist.types";

function spotifyApi(endpoint: 'track', id: string): Promise<ITrack>
function spotifyApi(endpoint: 'playlist', id: string): Promise<IPlaylist>
function spotifyApi(endpoint: 'artist', id: string): Promise<IArtist>
function spotifyApi(endpoint: string, id: string): Promise<unknown> {
	return fetch(`https://api.spotify.com/v1/${endpoint}/${id}`).then(res => res.json())
}

const track = await spotifyApi('track', '123')
const playlist = await spotifyApi('playlist', '456')
const artist = await spotifyApi('artist', '789')