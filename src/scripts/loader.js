export const getTheme = () => {
	const appearance = require('../../config/appearance.json');
	let theme = appearance.theme;
	return require('../../config/theme/'+theme+'.json');
}