import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ variant }) => {
	if (variant == 'dashboard') return <NavbarDashboard />
}

const NavbarDashboard = () => (
	<nav id="navbar" className="
		w-full position-fixed top-0 left-0 right-0
		bg-widget text-white
	">
		<div id="navbarContainer" className="
			w-full py-3 px-4
			flex justify-between items-center
		">
			<div id="navbarLeft" className="">
				<SidebarToggler />
				{/* <Link to="/dashboard" className="text-lg italic font-bold leading-3 ml-2">Xelanor</Link> */}
			</div>
			<div id="navbarRight">
				<button type="button" className="">
					<i className="fas fa-moon"></i>
				</button>
			</div>
		</div>
	</nav>
)

const SidebarToggler = () => {
	const [expanded, setExpanded] = React.useState(true);
	const toggle = (e) => {
		e.preventDefault();
		const sidebar = document.getElementById('sidebar');
		setExpanded(expanded ? false : true);
		if (expanded) {
			anime({
				targets: sidebar,
				marginLeft: -sidebar.clientWidth,
				duration: 1000,
				easing: 'easeOutExpo',
			})
			// sidebar.classList.remove(tgclass);
		} else {
			anime({
				targets: sidebar,
				marginLeft: 0,
				duration: 1000,
				easing: 'easeOutExpo',
			})
			// sidebar.classList.add(tgclass);
		}
	}
	return(
		<button type="button" className="transition-all"
		onClick={toggle}>
			<i className="fas fa-bars"></i>
		</button>
	)
}

export default Navbar;