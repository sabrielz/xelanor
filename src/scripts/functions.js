export const objectMap = (obj, fn) => {
	Object.fromEntries(
		Object.entries(obj).map(
			([k, v], i) => [k, fn(v, k, i)]
		)
	)
}

export const getKey = (x = 99999999) => {
	return Math.floor(Math.random() * x);
}

export const getApi = (url) => {
	fetch(url)
	.then(data => data.json())
	.then(data => data.data[0].values)
}

export const setMetadata = (data) => {
	
}