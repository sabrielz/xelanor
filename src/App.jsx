import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import General from "./layouts/General";
import Auth from "./layouts/Auth";

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="dashboard/*" element={<Dashboard />} />
			<Route path="auth/*" element={<Auth />} />
			{/* <Route path="*" element={<General />} /> */}
		</Routes>
	</BrowserRouter>
);

require('./scripts/htmltag');
require('./scripts/theme');

export default App;