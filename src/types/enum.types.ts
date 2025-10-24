// enum EnumAudioQuality {
// 	LOW = '96',
// 	MEDIUM = '160',
// 	HIGH = '320',
// 	LOSSLESS = 'FLAC',
// }

export const AudioQuality = {
	LOW: '96',
	MEDIUM: '160',
	HIGH: '320',
	LOSSLESS: 'FLAC'
} as const

export type AudioQuality = typeof AudioQuality[keyof typeof AudioQuality]

let q: AudioQuality

q = AudioQuality.LOW
q = 'FLAC'

console.log(q);
