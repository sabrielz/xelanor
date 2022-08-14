const axios = require('axios');

module.exports = new class Sidebar {

	sidebar = [];

	constructor() {
		this.sidebar = [];
	}

	init = () => {
		return this.sidebar == [] ? this.getSidebar() : this.sidebar;
	}
	
	getSidebar = () => {
		axios.get('http://localhost:4000/config/key/sidebar')
		.then(data => data.json())
		.then(data => {
			console.log(data.message);
			return this.sidebar = data.data.value;
		})
	}
	
	getSidebarMenu = () => {
		this.sidebar = this.init();
	}

}