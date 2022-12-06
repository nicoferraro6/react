import React from "react";
import logoProyectoCoder from "../../../images/logoProyectoCoder_Dark.png";
import "./Logo.css";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="LogoContainer">
      <NavLink to="/">
        <img src={logoProyectoCoder} alt="CoderCommerce Logo" />
      </NavLink>
    </div>
  );
}