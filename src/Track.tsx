import type { ITrack } from "./types/music.types"

interface Props {
	track: ITrack
}

export function Track({track}: Props) {
	return <div>{track.title}</div>
}