import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";

const General = () => (
	<Routes>
		<Route index element={<Home />} />
		{/* <Route path="/login" element={<Login />} /> */}
	</Routes>
)

export default General;