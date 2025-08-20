import React, { useState } from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    setIsToggled(!isToggled); // toggle state
  };

  return (
    <nav>
      <div className="nav-box">
        <h1>
          Abdulaziz<span className="secondPartOfLogo">Tahir.</span>
        </h1>

        {/* Desktop menu */}
        <ul className={isToggled ? "nav-links active" : "nav-links"}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>PORTFOLIO</li>
          <li>RESUME</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>

        {/* Hamburger icon */}
        <i
          className="fa-solid fa-bars"
          onClick={toggleMenu}
        ></i>
      </div>
    </nav>
  );
};
