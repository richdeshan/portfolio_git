// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
     <div className="flex flex-col gap-12">

        <div className="flex flex-col gap-12 mt-6">
          {/* SKILLS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {skills.map((skill, id) => (
              <div key={id} className="flex flex-col items-center gap-3">
                <div className="bg-blue-800 rounded-full flex items-center justify-center w-28 h-28">
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-16"
                  />
                </div>
                <p className="text-xl font-medium">{skill.title}</p>
              </div>
            ))}
          </div>

          {/* EXPERIENCE */}
          <ul className="flex flex-col gap-10 p-6">
            {history.map((item, id) => (
              <li
                key={id}
                className="flex gap-6 p-6 rounded-xl"
              >
                <img src={getImageUrl(item.imageSrc)} className="w-14 h-14" />

                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.role}, {item.organisation}
                  </h3>
                  <p className="opacity-80">
                    {item.startDate} - {item.endDate}
                  </p>

                  <ul className="list-disc ml-6 mt-3 space-y-1">
                    {item.experiences.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
