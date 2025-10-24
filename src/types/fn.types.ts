import type { ITrack } from "./music.types"

type TPlayFunction = (track: string) => void
type TVolumeFunction = (level: number) => void

const play: TPlayFunction = (track) => {
	console.log(`Playing track: ${track}`)
}

// function setVolume(level: number): void {
// 	if (level < 0 || level > 100) {
// 		throw new Error('Volume level must be between 0 and 100.')
// 	}
// 	console.log(`Setting volume to: ${level}`)
// }

const setVolume: TVolumeFunction = function(level) {
	if (level < 0 || level > 100) {
		throw new Error('Volume level must be between 0 and 100.')
	}
	console.log(`Setting volume to: ${level}`)
}

function addToQueue(track: ITrack, position: number = 1, isPlayNext: boolean = false): void {
	console.log(`Adding track: ${track.title} to position ${position} in the queue.`)
}