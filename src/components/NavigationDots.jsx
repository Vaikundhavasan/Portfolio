import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((element, i) => (
        <a
          key={i}
          href={`#${element}`}
          className="app__navigation-dot"
          style={active === element ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
