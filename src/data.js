import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";

export const ProjectsData = [
  {
    id: 0,
    title: "Sneaker Store",
    image: "/images/projects/sneakerStore.png",
    description:
      "A project using React and Redux Toolkit. A sneaker store where you can add and remove items from your shopping cart.",
    icons: [
      <FaHtml5 size={30} key={0} />,
      <FaCss3Alt size={30} key={1} />,
      <SiJavascript size={30} key={2} />,
      <FaReact size={30} key={0} />,
      <SiRedux size={30} key={0} />,
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
