import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "../dashboard/Home";
import Footer from "../components/Footer";
import Settings from "../dashboard/Settings";

const Dashboard = () => {
	return (
		<div id="dashboard" className="
			w-full relative flex flex-row flex-nowrap
			min-h-[100vh] items-stretch bg-wrapper dark:bg-wrapperDark
		">
			<Sidebar variant="dashboard" />
	
			<div id="wrapper" className="w-full flex-1">
	
				<Navbar variant="dashboard" />
				<div id="navbarPadder" data-padder="#navbar"></div>
				<main id="main" className="">
					<Routes>
						<Route index element={<Home />} />
						<Route path="settings/*" element={<Settings />} />
					</Routes>
				</main>
				
			</div>
			<Footer variant="dashboard" />
		</div>
	)
}

export default Dashboard;