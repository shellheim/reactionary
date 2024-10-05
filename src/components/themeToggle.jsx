import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") ?? "light";
	});

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const handleClick = (event) => {
		// prevTheme is actually the value of theme state when handleClick is called
		event.preventDefault();
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	const sun = (
		<img className="h-8 dark:invert" src="/sun.svg" alt="Toggle Theme" />
	);
	const moon = <img className="h-8" src="/moon.svg" alt="Toggle Theme" />;

	return (
		<button type="button" onClick={handleClick}>
			{theme === "light" ? moon : sun}
		</button>
	);
}
