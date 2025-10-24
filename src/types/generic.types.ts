import type { ITrack } from "./music.types"
import type { IPlaylist } from "./playlist.types"

export async function fetchFromSpotify<T>(
	endpoint: string,
	params?: Record<string, string>
): Promise<T> {
	const url = new URL(`/api/${endpoint}`)
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value)
		})
	}
	const response = await fetch(url.toString())

	const data = (await response.json()) as {data: T}

	return data.data
}

const track = await fetchFromSpotify<ITrack>('tracks/1')
const playlist = await fetchFromSpotify<IPlaylist[]>('playlists/1/tracks', {
	limit: '10'
})