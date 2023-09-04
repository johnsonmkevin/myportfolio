import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { ProjectsData } from "../../data";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.section_header}>
        <div className="section_divider" />
        <h1>Projects</h1>
      </div>
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {ProjectsData.map((project) => (
          <SwiperSlide key={project.id}>
            <div className={styles.container}>
              <div className={styles.image_container}>
                <img src={project.image} alt={project.title} />
              </div>

              <div className={styles.info}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className={styles.web_links}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Click to view</span>
                  </a>
                </div>

                <div className={styles.icons}>
                  {project.icons?.map((icon, index) => (
                    <span key={index}>{icon}</span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
