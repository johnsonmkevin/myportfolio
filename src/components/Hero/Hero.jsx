import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.image_wrapper}>
						<img src="/images/head_shot.jpg" alt="hero" />
					</div>
					<h1>Hi, I'm Kevin Johnson</h1>
					<p>
						<b>Junior Frontend Developer</b> based in Stockholm. <br />
						<b>Currently</b> looking to land that internship...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
