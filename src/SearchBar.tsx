import type { ChangeEvent, FormEvent, KeyboardEvent } from "react"

export function SearchBar() {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {

		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleSearch}
				onKeyDown={handleKeyDown}
				placeholder="Search tracks..."
			/>
		</form>
	)
}