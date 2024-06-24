import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/about";
import Workout from "./pages/workout";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Download from "./pages/download";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/homepage" element={<Home />} />
				<Route path="/workout" element={<Workout />} />
				<Route path="/about" element={<About />} />
				<Route path="/download" element={<Download />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</Router>
	);
}

export default App;
