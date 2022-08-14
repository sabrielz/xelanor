import { objectMap } from "../../scripts/functions";
// import axios from "axios"

let scripts = [];

export const getScripts = () => {
	return scripts = [
		{ type: "text/javascript", src: "" },
	]
}

export const setScripts = (scripts) => {
	scripts = scripts || getScripts();
	for (let script of scripts) {
		let newtag = document.createElement('script');
		objectMap(script, (val, key) => {
			newtag.setAttribute(key, val)
		});
		document.body.appendChild(newtag);
	}
}