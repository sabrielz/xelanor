import { objectMap } from "../../scripts/functions";
// import axios from "axios"

let styles = [];

export const getStyles = () => {
	return styles = [
		{ rel: "stylesheet", href: "/fontawesome/css/all.min.css" },
		{ rel: "stylesheet", href: "/tailwindcss/tailwind.css" },
	]
}

export const setStyles = (styles) => {
	styles = styles || getStyles();
	for (let style of styles) {
		let newtag = document.createElement('link');
		objectMap(style, (val, key) => {
			newtag.setAttribute(key, val)
		});
		document.head.appendChild(newtag);
	}
}