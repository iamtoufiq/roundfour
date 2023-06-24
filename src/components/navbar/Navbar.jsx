import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalHook } from "../../context/Contexts";
import "./navbar.css";
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
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
