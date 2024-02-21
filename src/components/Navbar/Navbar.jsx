import React from "react";
import "./Navbar.scss";
import images from "../../constants/images";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="" />
      </div>
      <ul>
        {["home", "about", "contact", "work", "skills", "contact"].map(
          (element, i) => (
            <li key={i}>
              <div />
              <a href={`#${element}`}>{element}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
