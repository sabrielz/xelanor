localStorage.theme = localStorage.theme ?? 'dark';
document.body.classList.add(localStorage.theme);

document.addEventListener('DOMContentLoaded', () => {

	const dataTheme = () => {
		const elems = document.querySelectorAll('[data-theme]');
		const currentTheme = localStorage.theme;
		const themes = {
			default: 'dark',
			mode: ['dark', 'light'],
			color: {
				dark: {
					wrapper: ['bg-wrapper text-white'],
					widget: ['bg-widget text-white']
				},
				light: {
					wrapper: ['bg-wrapper text-white'],
					widget: ['bg-widget text-white']
				}
			}
		}
		for (let elem of elems) {
			const theme = elem.getAttribute('data-theme');
			if (theme == 'widget') {

			} else if (theme == 'wrapper') {

			}
			// if (currentTheme == 'dark') {
			// 	elem.classList.add('bg-')
			// } else {

			// }
		}
	};
	//  dataTheme();

})