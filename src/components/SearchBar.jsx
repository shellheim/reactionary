import { useState } from "react";

function SearchBar(props) {
	const [word, setWord] = useState("");

	const handleChange = (event) => {
		setWord(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // this line's absence made me cry tears of blood
		if (word.trim() !== "") {
			props.searchWord(word);
		}
	};

	return (
		<form
			className="flex flex-col min-[320px]:flex-row justify-center items-center gap-4 mt-12"
			onSubmit={handleSubmit}
		>
			<label htmlFor="word">
				<span className="hidden">Search Words</span>
			</label>
			<input
				type="text"
				id="word"
				onChange={handleChange}
				value={word}
				className="bg-gray-300 dark:bg-slate-700 text-slate-600 dark:text-slate-100 placeholder:text-slate-600 dark:placeholder:text-slate-100 min-372:ml-6 p-4 rounded-3xl"
				placeholder="Search Words"
				name="word"
			/>
			<button className="active:scale-75 transition" type="submit">
				<img className="h-8" src="/search.svg" alt="Search" />
			</button>
		</form>
	);
}
export default SearchBar;
