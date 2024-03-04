import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import images from "../../constants/images";
import "./About.scss";

const abouts = [
  {
    title: "Web Designer",
    imgUrl: images.about01,
    description:
      "I am a Web Designer with a passion for creating beautiful designs.",
  },
  {
    title: "Backend Developer",
    imgUrl: images.about02,
    description:
      "I am a Backend developer with a passion for building functional web applications",
  },
  {
    title: "Frontend Developer",
    imgUrl: images.about03,
    description:
      "I am a frontend developer with a passion for building beautiful and functional web applications.",
  },
  {
    title: "React Native Developer",
    imgUrl: images.about04,
    description:
      "I am a React Native Developer with a passion for building beautiful and functional mobile applications.",
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Dev</span>
        <br />
        means
        <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={idx}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 20 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
