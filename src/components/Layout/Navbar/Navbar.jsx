import React from "react";
import styles from "./Navbar.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.left}>
					<a href="#">
						<BsCodeSlash />
					</a>
				</div>
				<div className={styles.right}>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#projects">Projects</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
					<div className={styles.socials}>
						<a href="#">
							<AiFillGithub />
						</a>
						<a href="#">
							<AiFillLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
