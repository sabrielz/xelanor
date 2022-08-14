import { objectMap } from "../../scripts/functions";
// import axios from "axios"

let metadata = [];

export const getMetadata = () => {
	return metadata = [
		{ charset: "UTF-8" },
		{ "http-equiv": "X-UA-Compatible", contents: "IE=edge" },
		{ name: "viewport", contents: "width=device-width, initial-scale=1.0" }
	]
}

export const setMetadata = (metadata) => {
	metadata = metadata || getMetadata();
	for (let meta of metadata) {
		let newtag = document.createElement('meta');
		objectMap(meta, (val, key) => {
			newtag.setAttribute(key, val)
		});
		document.head.appendChild(newtag);
	}
}