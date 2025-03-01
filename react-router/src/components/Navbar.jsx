import React from "react";
import image from "../assets/image.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={image} alt="" width="120px" />
      </NavLink>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/Products">
          <li>Product</li>
        </NavLink>
        <NavLink to="/About">
          <li>About</li>
        </NavLink>
        <NavLink to="/Contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/contact", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
