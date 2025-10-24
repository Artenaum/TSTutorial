import type { MouseEvent } from "react"

interface Props {
	onSeek: (time: number) => void
}

export function PlayerControls({onSeek}: Props) {
	const handleProgressClick = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect()
		const percent = (e.clientX - rect.left) / rect.width
		onSeek(percent * 100)
	}

	return (
		<div className="controls">
			<div
				className="progress-bar"
				onClick={handleProgressClick}
			/>
		</div>
	)
}