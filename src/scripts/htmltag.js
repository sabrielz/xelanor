export const setMetadata = (data) => {
	for (let meta in data) {
		if (meta == 'others') {
			for (let other of data[meta]) {
				let tag = document.createElement('meta');
				for (let oth in other) {
					tag.setAttribute(oth, other[oth]);
				}
				document.head.appendChild(tag);
			} continue;
		}
		let tag = document.createElement('meta');
		tag.setAttribute("name", meta);
		tag.setAttribute("contents", data[meta]);
		document.head.appendChild(tag);
	}
}

export const setCss = (data) => {
	for (let style in data) {
		let tag = document.createElement('link');
		tag.setAttribute("rel", "stylesheet");
		tag.setAttribute("href", data[style]);
		document.head.appendChild(tag);
	}
}

export const setJs = (data) => {
	for (let script in data) {
		let tag = document.createElement('script');
		tag.setAttribute("src", data[script]);
		document.body.appendChild(tag);
	}
}

fetch('http://localhost:4000/config/find/key/metadata')
.then(data => data.json())
.then(data => data.data[0].values)
.then(data => setMetadata(data))

fetch('http://localhost:4000/config/find/key/css')
.then(data => data.json())
.then(data => data.data[0].values)
.then(data => setCss(data))

fetch('http://localhost:4000/config/find/key/js')
.then(data => data.json())
.then(data => data.data[0].values)
.then(data => setJs(data))