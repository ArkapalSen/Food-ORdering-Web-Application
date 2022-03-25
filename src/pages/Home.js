import React from "react";
import { NavLink } from "react-router-dom";
import food from "../assets/food.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${food})` }}>
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <NavLink to="#">
          <button>Order Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
