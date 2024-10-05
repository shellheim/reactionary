import SkeletonCard from "./SkeletonCard";

function DisplayWord(props) {
	if (props.loading) {
		return (
			<div className="bg-gray-300 dark:bg-slate-600 text-slate-600 dark:text-slate-100 max-w-[25ch] min-372:max-w-[35ch] min-400:max-w-[38ch] min-[500px]:max-w-[45ch] mt-8 mx-auto p-8 rounded-3xl">
				<SkeletonCard />
			</div>
		);
	}

	if (!props.ok) {
		return (
			<div className="flex gap-4 bg-gray-300 dark:bg-slate-600 text-slate-600 dark:text-slate-100 max-w-fit mt-8 mx-auto p-8 rounded-3xl">
				<img className="h-6 dark:invert" src="/warn.svg" alt="Warning Icon" />
				{props.status === 404
					? `Couldn't find any meaning for "${word.value}" `
					: ` Oops! An Error Occurred: 
					HTTP ERROR CODE: ${props.status}`}
			</div>
		);
	}
	// before the above check because both this will equate to true if !props.ok = true
	if (!props.data) {
		return null;
	}

	// This function is invoked when there are no values for the first type of data, i.e., if there is no main 'phoenetic' key in the props.data and there are phoenetics in the key/array 'phoenetics' then this function will go through all such arrays one by one and pick the first non-empty option.
	const getValueFromKey = (key, subKey) => {
		for (const element of props.data) {
			if (element[key]) {
				for (const subItem of element[key]) {
					if (subItem[subKey] && subItem[subKey] !== "") {
						return subItem[subKey];
					}
				}
			}
		}
		//If there are absolutely NO sub items
		return "";
	};

	const phoenetic = getValueFromKey("phonetics", "text");
	const partOfSpeech = getValueFromKey("meanings", "partOfSpeech");

	const getDefinitions = (data) => {
		const allDefinitions = data.flatMap((entry) =>
			entry.meanings.flatMap((meaning) =>
				meaning.definitions.map((def) => def.definition),
			),
		);
		return allDefinitions;
	};
	const definitions = getDefinitions(props.data);

	const definitionsList = definitions.map((definition, index) => {
		return (
			// can use index as the key since it doesn't matter what the order of the items is
			<p className="my-4" key={index}>
				<b>{index + 1}.</b> {definition}
			</p>
		);
	});

	return (
		<div className="bg-gray-300 dark:bg-slate-600 text-slate-600 dark:text-slate-100 max-w-[25ch] min-372:max-w-[35ch] min-400:max-w-[38ch] min-[500px]:max-w-[45ch] mt-8 mx-auto p-8 rounded-3xl">
			<div className="word">
				<p className="text-4xl font-medium">{props.data[0].word}</p>
			</div>
			<div className="desc">
				<p className="my-4 text-lg text-slate-100">{phoenetic}</p>
				<p className="my-4 text-lg">{partOfSpeech}</p>
				{/* Only want 3 or less definitions */}
				{definitionsList.slice(0, 3)}
			</div>
		</div>
	);
}

export default DisplayWord;
