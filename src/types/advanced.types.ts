import type { IBase, ITrack } from "./music.types"

type ExtractArrayType<T> = T extends (infer U)[] ? U : never

export type TrackType = ExtractArrayType<ITrack[]>

// type Optional<T> = {
// 	[K in keyof T]?: T[K]
// }

// type Nullable<T> = {
// 	[K in keyof T]: T[K] | null
// }

// type TrackDraft = Optional<ITrack>
// type TrackUpdate = Nullable<ITrack>

// type Getters<T> = {
// 	[K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
// }

// type TrackGetters = Getters<Omit<ITrack, keyof IBase>>