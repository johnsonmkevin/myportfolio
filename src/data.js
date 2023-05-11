import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const ProjectsData = [
	{
		id: 0,
		title: "Random Activity - Api project",
		image: "/images/projects/project1.png",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae dicta nam amet quos deleniti error dolorum fugit similique, id ullam! Alias rerum totam, sint iure vitae minus error quo?",
		icons: [<FaHtml5 size={30} key={0} />, <FaCss3Alt size={30} key={1} />, <SiJavascript size={30} key={2} />],
	},
	{
		id: 1,
		title: "Pokemon Memory Game - Api project",
		image: "/images/projects/project2.png",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae dicta nam amet quos deleniti error dolorum fugit similique, id ullam! Alias rerum totam, sint iure vitae minus error quo?",
		icons: [<FaHtml5 size={30} key={0} />, <FaCss3Alt size={30} key={1} />, <SiJavascript size={30} key={2} />],
	},
	{
		id: 2,
		title: "Nike Landing Page - React project",
		image: "/images/projects/project3.png",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vitae dicta nam amet quos deleniti error dolorum fugit similique, id ullam! Alias rerum totam, sint iure vitae minus error quo?",
		icons: [<FaReact size={30} key={0} />],
	},
];
