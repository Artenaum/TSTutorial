import type { IBase, TImageUrl, ITrack, TId } from "./music.types";

export interface IPlaylist extends IBase {
	name: string
	desciption?: string
	tracks: ITrack[]
	coverImage: TImageUrl
	owner: {
		id: TId
		displayName: string
		isPremium: boolean
	}
	isPublic: boolean
	followers: number
}