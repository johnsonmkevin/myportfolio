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
            {/* 	<img src="/images/about/profile1.png" alt="Kevin about picture1" /> */}
            <img src="/images/about/profile2.png" alt="Kevin about picture2" />
            {/* 		<img src="/images/about/profile3.png" alt="Kevin about picture3" /> */}
          </div>
          <div className={styles.text}>
            <p>
              I am a junior frontend developer currently studying at Hyper Island Stockholm. With a
              background in psychology counseling, I have a strong passion for learning and
              developing my web development skills. I began my journey in web development in 2022
              and enjoy being part of a team. As the student representative in my class for both
              semesters, I actively contributed to shaping the curriculum for upcoming students. I
              am committed to sharpening my skills and making a positive impact on those around me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
