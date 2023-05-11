import React from "react";
import "./index.css";

// Components
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<>
			<section id="home">
				<Hero />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</>
	);
}

export default App;
