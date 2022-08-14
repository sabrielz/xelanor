import React from "react";
import { Link } from "react-router-dom";
import { getKey } from "../scripts/functions";

const Sidebar = () => {
	const [ brand, setBrand ] = React.useState();
	const [ sidebar, setSidebar ] = React.useState();
	React.useEffect(() => {
		fetch('http://localhost:4000/config/find/key/brand')
		.then(data => data.json())
		.then(data => data.data[0].values)
		.then(data => setBrand(data));

		fetch('http://localhost:4000/config/find/key/sidebar')
		.then(data => data.json())
		.then(data => data.data[0].values)
		.then(data => setSidebar(data));
	}, [])
	return (
		<div id="sidebar" className="
		basis-[280px] bg-widget text-white
		">

			<div id="sidebarContainer" className="w-full relative">
				{brand && <Brand brand={brand} />}
				<hr className="w-full opacity-25" />
				{sidebar && <Menu menu={sidebar.menu} />}
			</div>

		</div>
	)
}

const Brand = ({ brand }) => {
	return (
		<Link to="/dashboard" className="
			block w-full text-center italic font-bold
			text-4xl leading-8 p-4 text-primary hover:opacity-80
			transition-opacity
		"> {brand.name} </Link>
	)
}

const Menu = ({ menu }) => {
	const [active, setActive] = React.useState();
	return (
		<div className="w-full flex flex-col">
			{menu.map(item => {
				if (item.type == 'header') {
					return (
						<MenuHeader
							key={getKey()}
							label={item.label}
						/>
					);
				} else if (item.type == 'dropdown') {
					return (
						<MenuDropdown
							key={getKey()}
							icon={item.fontawesome}
							label={item.label}
							items={item.items}
						/>
					);
				} else {
					return (
						<MenuItem
							key={getKey()}
							href={item.href}
							icon={item.fontawesome}
							label={item.label}
						/>
					);
				}
			})}
		</div>
	)
}

const MenuDropdown = ({ icon, label, items }) => {
	return (
		<div className="w-full relative bg-inherit">
			<MenuSubToggler
				icon={icon}
				label={label}
			/>
			<div className="w-full relative hidden">
				{items.map(item => {
					return (
						<MenuSubItem
							key={getKey()}
							href={item.href}
							icon={item.fontawesome}
							label={item.label}
						/>
					)
				})}
			</div>
		</div>
	)
}

const MenuHeader = ({ label }) => {
	return (
		<div key={getKey()} className="
			uppercase text-xs mb-1 ml-2 mt-3 pb-0
			text-primary font-bold
		"> {label} </div>
	)
}

const MenuItem = ({ href, icon, label }) => {
	return (
		<Link to={href} className="
			w-full flex items-center px-2 group transition-colors
			hover:bg-primary
		">

			<div className="basis-12 text-center py-1 px-2">
				<i className={'text-2xl ' + icon}></i>
			</div>

			<label className="
				flex-1 font-bold text-left group-hover:cursor-pointer
			"> {label} </label>
			
		</Link>
	)
}

const MenuSubToggler = ({ icon, label }) => {
	const [collapsed, setCollapsed] = React.useState(true);
	const toggle = (e) => {
		e.preventDefault();
		let elem = e.currentTarget;
		let parent = elem.parentElement;
		let dropdown = parent.children[1];
		setCollapsed(collapsed ? false : true);
		if (collapsed) {
			dropdown.classList.remove('hidden');
		} else {
			dropdown.classList.add('hidden');
		}
	}
	return (
		<button type="button" className="
			w-full flex items-center px-2 cursor-pointer group
			hover:bg-primary transition-colors
		" onClick={toggle} >

			<div className="basis-12 text-center py-1 px-2">
				<i className={'text-2xl ' + icon}></i>
			</div>
			
			<label className="
				flex-1 font-bold text-left group-hover:cursor-pointer
			"> {label} </label>

			<i className={"fas fa-angle-down p-2"}></i>
		</button>
	)
}

const MenuSubItem = ({ href, icon, label }) => {
	return (
		<Link to={href} className="
			w-full flex items-center transition-colors
			hover:bg-primary
		">
			<div className="basis-[1.5rem]"></div>

			<div className="min-w-min text-center py-1 px-2">
				<i className={'text-2xl ' + icon}></i>
			</div>

			<div className="flex-1 font-bold">
				{label}
			</div>
			
		</Link>
	)
}

export default Sidebar;