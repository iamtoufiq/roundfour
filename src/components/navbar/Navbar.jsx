import React from "react";
import "./navbar.css";
import { useGlobalHook } from "../../context/Contexts";
const Navbar = () => {
  const data = useGlobalHook();
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Toufiq</div>
        <input placeholder="Search..." />
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="//github.io/jo_geek" target="_blank" rel="noreferrer">
          Home
        </a>
        <a
          href="http://stackoverflow.com/users/4084003/"
          rel="noreferrer"
          target="_blank"
        >
          About
        </a>
        <a
          href="https://in.linkedin.com/in/jonesvinothjoseph"
          rel="noreferrer"
          target="_blank"
        >
          Contact
        </a>
        <a href="https://codepen.io/jo_Geek/" rel="noreferrer" target="_blank">
          Services
        </a>
      </div>
    </div>
  );
};

export default Navbar;
