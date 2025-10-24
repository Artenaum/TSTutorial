// interface IUser {

import type { IArtist } from "./types/music.types"
import type { IPlaylist } from "./types/playlist.types"

// }

// type TUser = {

// }

// EStatus {}

interface ITrackMetadata {
	id: string
	createdAt: Date
	updatedAt: Date
}

interface ITrackContent {
	title: string
	artist: IArtist
	playlist: IPlaylist
}

export interface ITrackR extends ITrackMetadata, ITrackContent {
	audioUrl: string
}