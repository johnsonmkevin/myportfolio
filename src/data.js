import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const ProjectsData = [
	{
		id: 0,
		title: "Random Activity - Api project",
		image: "/images/projects/project1.png",
		description:
			"My first project using an API. I used the an random activity API to fetch random activities. I used HTML, CSS, and JavaScript to build this project. I enjoyed building this project and I learned a lot about API's and how to use them.",
		icons: [<FaHtml5 size={30} key={0} />, <FaCss3Alt size={30} key={1} />, <SiJavascript size={30} key={2} />],
	},
	{
		id: 1,
		title: "Pokemon Memory Game - Api project",
		image: "/images/projects/project2.png",
		description:
			"Used HTML, CSS, and JavaScript to build this project. I used the Pokemon API to fetch the data. I learned a lot about API's and how to use them. I also learned a lot about JavaScript and how to use it to build a game.",
		icons: [<FaHtml5 size={30} key={0} />, <FaCss3Alt size={30} key={1} />, <SiJavascript size={30} key={2} />],
	},
	{
		id: 2,
		title: "Nike Landing Page - React project",
		image: "/images/projects/project3.png",
		description:
			"My first single page app using React. I used HTML, CSS, and React to build this project. I learned a lot about React and how to use it to build a single page app. I also learned a lot about JavaScript and how to use it to build a single page app.",
		icons: [<FaReact size={30} key={0} />],
	},
];
