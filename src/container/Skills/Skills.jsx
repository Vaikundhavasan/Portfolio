import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { AppWrap } from "../../wrapper";
import "./Skills.scss";
import images from "../../constants/images";

const experience = [
  {
    year:"2023-2024",
    works:[
      {
        name:"Web Developer Intern",
        company:"Steam Troops Innovation Labs Pvt Ltd",
        desc:"I worked as a Intern over 6 months",
      }
    ],
  }
];
const skills = [
  {
    name:"HTML",
    icon:images.html,
  },
  {
    name:"CSS",
    icon:images.css,
  },
  {
    name:"Java Script",
    icon:images.javascript,
  },
  {
    name:"React JS",
    icon:images.react,
  },
  {
    name:"Sass",
    icon:images.sass,
  },
  {
    name:"Node JS",
    icon:images.node,
  },
  {
    name:"API",
    icon:images.api,
  },
];

const Skills = () => {

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {experience.map((exp) => (
            <motion.div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text"> {exp.year} </p>
              </div>

              <motion.div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
