import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const Click = () => {
    setShowLinks(!showLinks);
  };
  return (
    <>
      <div className="navbar">
        <div className="leftSide" id={showLinks ? "open" : "close"}>
          <img src={logo} alt={logo} />
          <div className="hiddenLinks">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/menu">Menu</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="rightSide">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/menu">Menu</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
          <button onClick={() => Click()}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
