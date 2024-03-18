import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Work.scss";
import images from "../../constants/images";

const works = [
  {
    title: "Restaurant Landing Page",
    description: "",
    projectLink: "https://vaikundhavasan.github.io/landing-page/",
    codeLink: "https://github.com/Vaikundhavasan/landing-page",
    imgUrl: images.landing_page,
    tags: ["All"],
  },
  {
    title: "Dice Game",
    description: "",
    projectLink: "https://vaikundhavasan.github.io/Dice-Game/",
    codeLink: "https://github.com/Vaikundhavasan/Dice-Game",
    imgUrl: images.dice_game,
    tags: ["All"],
  }, 
  {
    title: "Food Lab Landing Page",
    description: "",
    projectLink: "https://vaikundhavasan.github.io/internshipTask/",
    codeLink: "https://github.com/Vaikundhavasan/internshipTask",
    imgUrl: images.food_lab,
    tags: ["All"],
  },
  {
    title: "FAST REACT PIZZA COMPANY",
    description: "",
    projectLink: "https://vaikundhavasan.github.io/React-Pizza/",
    codeLink: "https://github.com/Vaikundhavasan/React-Pizza",
    imgUrl: images.react_pizza,
    tags: ["All"],
  },
  {
    title: "Zip Code",
    description: "",
    projectLink: "https://vaikundhavasan.github.io/zipCodeLive/",
    codeLink: "https://github.com/Vaikundhavasan/zipCodeLive",
    imgUrl: images.zip_code,
    tags: ["All"],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") setFilterWork(works);
      else setFilterWork(works.filter((work) => work.tags.includes(item)));
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span> Portfolio </span>
        Section
      </h2>

      <div className="app__work-filter">
        {["All"].map(
          (item, idx) => (
            <div
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text  ${
                activeFilter === item ? "item-active" : ""
              } `}
              key={idx}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, idx) => (
          <div className="app__work-item app__flex" key={idx}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  staggerChildren: 0.5,
                  ease: "easeInOut",
                }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
