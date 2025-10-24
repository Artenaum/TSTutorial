export type TId = string
export type TImageUrl = string

// type Duration = number
// type isPublished = boolean
// type artist = null | string
// type album = undefined | string

export type TStatus = 'idle' | 'loading' | 'succeded' | 'failed'

export interface IBase {
	id: TId
	createdAt: string
	updatedAt: string
}

export interface IArtist extends IBase {
	name: string
	image: TImageUrl
	isVerified: boolean
}

export interface ITrack extends IBase {
	artist: IArtist
	title: string
	duration: number
	isPublished: boolean
	audioUrl: string
}

