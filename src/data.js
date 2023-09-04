import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export const ProjectsData = [
  {
    id: 0,
    title: "Random Activity - Api project",
    image: "/images/projects/project1.png",
    description:
      "My first project using an API. I used the an random activity API to fetch random activities. I used HTML, CSS, and JavaScript to build this project. This was my first introduction to API's and extracting data to present on the browser for the user .",
    icons: [
      <FaHtml5 size={30} key={0} />,
      <FaCss3Alt size={30} key={1} />,
      <SiJavascript size={30} key={2} />,
    ],
    link: "https://gregarious-empanada-1946e6.netlify.app/",
  },
  {
    id: 1,
    title: "Pokemon Memory Game - Api project",
    image: "/images/projects/project2.png",
    description:
      "Used HTML, CSS, and JavaScript to build this project. I used the Pokemon API to fetch the data. I learned a lot about API's and how to use them. I also learned a lot about JavaScript and how to use it to build a game.",
    icons: [
      <FaHtml5 size={30} key={0} />,
      <FaCss3Alt size={30} key={1} />,
      <SiJavascript size={30} key={2} />,
    ],
    link: "https://quiet-manatee-2ecf40.netlify.app/",
  },
  {
    id: 2,
    title: "Raedy BasketBall - React project",
    image: "/images/projects/raedyProject.png",
    description:
      "Using Next.JS to make a landing page for a basketball website using different animation tools and Three JS",
    icons: [<FaReact size={30} key={0} />],
    link: "https://effulgent-khapse-f0a35f.netlify.app/",
  },
];
