// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className="flex justify-center gap-4" id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className="flex justify-center gap-4">
        <div className="flex justify-center gap-4">
          {skills.map((skill, id) => (
            <div key={id} className="flex justify-center gap-4">
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
