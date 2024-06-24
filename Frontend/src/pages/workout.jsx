import React from "react";
import Header from "../components/workouts/Header/header";
import Favworkout from "../components/homepage/content/favworkout";
import Main from "../components/workouts/main/main";
import Section from "../components/workouts/section/section"
import Footer from "../components/homepage/footer/footer";
import Dailymeal from "../components/workouts/content/dailymeal";

const Workout = () => {
	return (
		<div>
			<Header/>
			<Favworkout/>
			<Main/>
			<Dailymeal/>
			<Section/>
			<Footer/>
		</div>
	);
};

export default Workout;
