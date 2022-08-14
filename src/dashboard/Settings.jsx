import React from "react";
import { Routes, Route } from "react-router-dom";
import Brand from "./settings/Brand";

const Settings = () => {
	return (
		<Routes>
			<Route path="brand" element={<Brand />} />
		</Routes>
	)
}

export default Settings;