import { useState } from "react";
import DisplayWord from "./components/DisplayWord";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
	const [wordData, setWordData] = useState(""); // the json we get from the api
	const [loading, setLoading] = useState(false); // if the data is loaded yet

	const [responseStatus, setResponseStatus] = useState(200);
	const [okStatus, setOkStatus] = useState(true);

	// the main fetch function
	const searchWord = async (word) => {
		setLoading(true);

		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

		try {
			const response = await fetch(url);

			setResponseStatus(response.status);
			setOkStatus(response.ok);

			if (!response.ok) {
				throw new Error(
					response.status === 404
						? `Couldn't find any definitions for "${word}"`
						: `An HTTP error occurred with status code ${response.status}`,
				);
			}

			const result = await response.json();
			setWordData(result);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<NavBar />
			<SearchBar searchWord={searchWord} />
			<DisplayWord
				ok={okStatus}
				status={responseStatus}
				loading={loading}
				data={wordData}
			/>
			<Footer />
		</>
	);
}

export default App;
