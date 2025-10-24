import { useState, useRef, type ReactNode } from "react"
import type { IArtist, ITrack } from "./types/music.types"

export function SpotifyWrapper({children}: {children: ReactNode}) {
	const [currentTrack, setCurrentTrack] = useState<ITrack	| null>(null)
	const [queue, setQueue] = useState<ITrack[]>([])

	const [user, setUser] = useState<IArtist>({} as IArtist)
	const [volume, setVolume] = useState<number>(0.7)

	const audioRef = useRef<HTMLAudioElement>(null)

	return <div>{children}</div>
}