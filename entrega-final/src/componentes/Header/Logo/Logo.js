import React from "react";
import logoProyectoCoder from "../../../images/logoProyectoCoder_Dark.png";
import s from "./Logo.css";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className={s.LogoContainer}>
      <NavLink to="/">
        <img src={logoProyectoCoder} alt="CoderCommerce Logo" />
      </NavLink>
    </div>
  );
}