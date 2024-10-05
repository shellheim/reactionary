/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"min-400": "400px",
				"min-372": "372px",
			},
			fontFamily: {
				mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
			},
		},
	},
	darkMode: "selector",
	plugins: [],
};
