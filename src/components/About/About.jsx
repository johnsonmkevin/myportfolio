import React from "react";
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className="section_divider" />
					<h1>About Me</h1>
					<div className={styles.image_grid}>
						<img src="/images/about/profile1.png" alt="Kevin about picture1" />
						<img src="/images/about/profile2.png" alt="Kevin about picture2" />
						<img src="/images/about/profile3.png" alt="Kevin about picture3" />
					</div>
					<div className={styles.text}>
						<p>
							Hello, my name is Kevin. I am a junior front end developer. I am currently studying at Hyper Island in
							Stockholm, Sweden. I am a former psychology counselor with a passion for learning and developing my skills
							with web development. I have started my journey in web development in 2022. I enjoy learning and being a
							part of a team. I am currently the student representative in my class for both semesters and played a role
							in shaping the curriculum for the next group of rising talents. I am looking forward to sharping my skills
							and bringing the best not only for myself but also for others around me.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
